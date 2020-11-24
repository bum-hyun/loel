import dynamic from "next/dynamic";
import React from "react";
import DefaultLayout from "layouts";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "components/TuiEditorWrapper";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "highlight.js/styles/railscasts.css";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("components/TuiEditorWrapper"), { ssr: false });
const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

const WysiwygEditor: React.FC<{}> = () => {
  const editorRef = React.useRef<EditorType>();
  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();

    console.log(instance.getMarkdown());
  }, [editorRef]);

  const content = ["```typescript", "console.log('here')", "```"].join("\n");

  return (
    <div>
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
    </div>
  );
};

export default DefaultLayout(WysiwygEditor);
