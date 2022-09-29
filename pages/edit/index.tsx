import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import service from "../../utils/service";
import Select, { ValueType, OptionTypeBase } from "react-select";
import { EmptyLayout } from "layouts";
import { Button } from "styles";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "components/TuiEditorWrapper";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "highlight.js/styles/railscasts.css";
import styled from "styles/styled";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_POST, MODIFY_POST, GET_POST } from "@api/Post";
import { GET_CATEGORIES } from "@api/Category";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("components/TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

const WysiwygEditor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<IPost>({ title: "", category: "", html: "", html2: "", email: "ru_bryunak@naver.com", markdown: "" });
  const [image, setImage] = useState<string[]>([]);
  const [options, setOptions] = useState<OptionTypeBase[]>([]);
  const editorRef = React.useRef<EditorType>();
  const imageUploadRef = React.useRef<HTMLInputElement | null>(null);

  useQuery(GET_CATEGORIES, {
    fetchPolicy: "cache-first",
    onCompleted: (data) => {
      const dummy = data.getCategories.reduce((acc: OptionTypeBase[], cur: ICategoryWithChildren) => {
        acc.push({ value: cur.category, label: cur.name });
        return acc;
      }, []);
      setOptions(dummy);
    },
  });

  useQuery(GET_POST, {
    fetchPolicy: "network-only",
    variables: { id },
    skip: !id,
    onCompleted: (data) => {
      const post = data.getPost;
      setPost({ email: post.user.email, category: post.category, title: post.title, html: post.html, markdown: post.markdown, image: post.image, html2: post.html2 });
    },
  });

  const handleChange = () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const html2 = document.querySelector(".tui-editor-contents")!.innerHTML;
    const images = document.querySelectorAll(".tui-editor-contents img") as NodeListOf<HTMLImageElement>;

    if (images.length === 0) {
      setPost({ ...post, image: [], html: instance.getHtml(), html2, markdown: instance.getMarkdown() });
      setImage([]);
    } else {
      setPost({ ...post, html: instance.getHtml(), html2, markdown: instance.getMarkdown() });
    }
  };

  const handleSelect = (newValue: ValueType<OptionTypeBase, false>) => {
    if (newValue) {
      setPost({ ...post, category: newValue.value });
    } else {
      setPost({ ...post, category: null });
    }
  };

  const handleTitle = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    setPost({ ...post, title: value });
  };

  const [EditPostMutation] = useMutation(id ? MODIFY_POST : CREATE_POST, {
    onCompleted: () => {
      router.push(`/${post.category}`);
    },
  });

  const Submit = async () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const html2 = document.querySelector(".tui-editor-contents")!.innerHTML;

    if (post.html2 !== html2) {
      const newPost = { ...post, html: instance.getHtml(), html2, markdown: instance.getMarkdown() };
      await EditPostMutation({
        variables: id ? { id, input: newPost } : { input: newPost },
      });
    } else {
      await EditPostMutation({
        variables: id ? { id, input: post } : { input: post },
      });
    }
  };

  const addImageBlobHook = async (blob: File | Blob, callback: (url: string, altText: string) => void) => {
    const formData = new FormData();
    formData.append("img", blob);
    const { data } = await service.post("/upload", formData);
    callback(data.contents, "image");
    const elements = document.querySelectorAll(".tui-editor-contents img") as NodeListOf<HTMLImageElement>;
    const images: string[] = [];
    elements.forEach((image) => images.push(image.src));
    setImage(images);
  };

  const clickUploadInput = () => {
    if (!imageUploadRef.current) return;
    imageUploadRef.current!.click();
  };

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const formData = new FormData();
    if (files && files.length > 0) {
      Array.from(files).forEach((item) => {
        formData.append("images", item);
      });
    }
    const { data } = await service.post("/upload", formData);
    const instance = editorRef.current!.getInstance();
    data.forEach((item: any) => {
      instance.insertText(`![image](${item.contents})`);
    });
    const elements = document.querySelectorAll(".tui-editor-contents img") as NodeListOf<HTMLImageElement>;
    const images: string[] = [];
    elements.forEach((image) => images.push(image.src));
    setImage(images);
  };

  useEffect(() => {
    setPost({ ...post, image });
  }, [image]);

  return (
    <Wrap>
      <RowWrap>
        <SelectWrap instanceId={"select"} options={options} value={options.filter((item) => item.value === post.category)} onChange={handleSelect} isClearable={true} />
        <Button onClick={clickUploadInput}>
          이미지 업로드
          <input ref={imageUploadRef} type={"file"} multiple={true} onChange={uploadFile} style={{ display: "none" }} />
        </Button>
        <ButtonWrap variant={id ? "warning" : "success"} height={38} onClick={Submit}>
          {id ? "수정" : "등록"}
        </ButtonWrap>
      </RowWrap>
      <RowWrap>
        <TitleInput onChange={handleTitle} value={post.title} placeholder={"제목을 입력해주세요."} />
      </RowWrap>
      <EditorWithForwardedRef
        initialValue={post.markdown}
        previewStyle={"vertical"}
        height={"600px"}
        initialEditType={"markdown"}
        useCommandShortcut={true}
        ref={editorRef}
        previewHighlight={false}
        onChange={handleChange}
        hooks={{ addImageBlobHook }}
      />
    </Wrap>
  );
};

export default EmptyLayout(WysiwygEditor);

const Wrap = styled.div`
  width: 100%;
    
  .language-youtube div {
    position: relative;
    padding-top 56.25%;
  }
  
  .language-youtube iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SelectWrap = styled(Select)`
  margin-right: 1rem;
  width: 300px;
  font-size: 0.875rem;
  z-index: 3;

  > div {
    border-color: #e5e5e5;
  }
`;

const ButtonWrap = styled(Button)`
  margin-left: auto;
`;

const TitleInput = styled.input`
  margin: 0;
  padding: 0 0.5rem;
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  :hover,
  :focus {
    border-color: hsl(0, 0%, 70%);
  }
`;
