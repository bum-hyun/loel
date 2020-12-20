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

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

interface IArticleData {
  email?: string;
  category?: string | null;
  html?: string;
  markdown?: string;
  title?: string;
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
  const [data, setData] = useState<IArticleData>({ email: "ru_bryunak@naver.com" });
  const editorRef = React.useRef<EditorType>();

  const handleChange = () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    setData({ ...data, html: instance.getHtml(), markdown: instance.getMarkdown() });
  };

  const handleSelect = (newValue: ValueType<OptionTypeBase, false>) => {
    if (newValue) {
      setData({ ...data, category: newValue.value });
    } else {
      setData({ ...data, category: null });
    }
  };

  const handleTitle = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    setData({ ...data, title: value });
  };

  const Submit = async () => {
    const result = await service.post("http://localhost:8002/post/create", data);
    console.log(result);
  };

  const addImageBlobHook = (blob: any, callback: any) => {
    console.log(blob);
    console.log(callback);
  };
  
  useEffect(() => {
    console.log(data)
  }, [data])

  const content = ["```typescript", "console.log('here')", "```"].join("\n");

  return (
    <Wrap>
      <RowWrap>
        <SelectWrap instanceId={"select"} defaultValue={data.category} onChange={handleSelect} options={options} isClearable={true} />
        <Button variant={"success"} height={38} onClick={Submit}>
          등록
        </Button>
      </RowWrap>
      <RowWrap>
        <TitleInput onChange={handleTitle} placeholder={"제목을 입력해주세요."} />
      </RowWrap>
      <EditorWithForwardedRef
        initialValue={content}
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
