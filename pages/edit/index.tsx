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

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const options: OptionTypeBase[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("components/TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

const WysiwygEditor: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<IPost>({ title: "", category: "", html: "", email: "ru_bryunak@naver.com", markdown: "" });
  const [image, setImage] = useState<string[]>([]);
  const editorRef = React.useRef<EditorType>();

  const handleChange = () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    setPost({ ...post, html: instance.getHtml(), markdown: instance.getMarkdown() });
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

  const Submit = async () => {
    if (id) {
      await service.put(`http://localhost:8002/post/${id}`, post);
      await router.push(`/post/${post.category}`);
    } else {
      await service.post("http://localhost:8002/post/create", post);
    }
  };

  const addImageBlobHook = async (blob: File | Blob, callback: (url: string, altText: string) => void) => {
    const formData = new FormData();
    formData.append("img", blob);
    const { data } = await service.post("http://localhost:8002/post/image", formData);
    callback(data.url, "image");
    const elements = document.querySelectorAll(".tui-editor-contents img") as NodeListOf<HTMLImageElement>;
    const images: string[] = [];
    elements.forEach((image) => images.push(image.src));
    setImage(images);
  };

  useEffect(() => {
    setPost({ ...post, image });
  }, [image]);

  useEffect(() => {
    async function getData() {
      const { data } = await service.get(`http://localhost:8002/post/${id}`);
      setPost(data.data);
    }
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <Wrap>
      <RowWrap>
        <SelectWrap instanceId={"select"} value={options.filter((item) => item.value === post.category)} onChange={handleSelect} options={options} isClearable={true} />
        <Button variant={id ? "warning" : "success"} height={38} onClick={Submit}>
          {id ? "수정" : "등록"}
        </Button>
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
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SelectWrap = styled(Select)`
  width: 300px;
  font-size: 0.875rem;

  > div {
    border-color: #e5e5e5;
  }
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
