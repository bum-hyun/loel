import dynamic from "next/dynamic";
import React from "react";
import DefaultLayout from "layouts";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "components/TuiEditorWrapper";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "highlight.js/styles/github.css";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("components/TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
  onChange?(value: string): void;

  valueType?: "markdown" | "html";
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const { initialValue, previewStyle, height, initialEditType, useCommandShortcut } = props;

  const editorRef = React.useRef<EditorType>();
  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";

    props.onChange(valueType === "markdown" ? instance.getMarkdown() : instance.getHtml());
  }, [props, editorRef]);

  const content = ["```youtube", "XyenY12fzAk", "```"].join("\n");

  return (
    <div>
      <EditorWithForwardedRef
        {...props}
        initialValue={content || "hello react editor world!"}
        previewStyle={previewStyle || "vertical"}
        height={height || "600px"}
        initialEditType={initialEditType || "markdown"}
        useCommandShortcut={useCommandShortcut || true}
        ref={editorRef}
      />
    </div>
  );
};

export default DefaultLayout(WysiwygEditor);
