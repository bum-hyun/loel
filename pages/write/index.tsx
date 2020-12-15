import dynamic from "next/dynamic";
import React, { useState } from "react";
import Select, { ValueType, OptionTypeBase, Props as SelectProps } from "react-select";
import { DefaultLayout } from "layouts";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "components/TuiEditorWrapper";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "highlight.js/styles/railscasts.css";
import styled from "styles/styled";
import { Button } from "styles";

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
  const [selectedOption, setSelectedOption] = useState<SelectProps | null>(null);
  const editorRef = React.useRef<EditorType>();

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
  }, [editorRef]);

  const handleSelect = (newValue: ValueType<OptionTypeBase, false>) => {
    if (newValue) {
      setSelectedOption(newValue.value);
    } else {
      setSelectedOption(null);
    }
  };

  const Submit = () => {
    console.log("등록");
  };

  const content = ["```typescript", "console.log('here')", "```"].join("\n");

  return (
    <Wrap>
      <RowWrap>
        <SelectWrap instanceId={"select"} defaultValue={selectedOption} onChange={handleSelect} options={options} isClearable={true} />
        <Button variant={"success"} height={38} onClick={Submit}>
          등록
        </Button>
      </RowWrap>
      <RowWrap>
        <TitleInput placeholder={"제목을 입력해주세요."} />
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
      />
    </Wrap>
  );
};

export default DefaultLayout(WysiwygEditor);

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
