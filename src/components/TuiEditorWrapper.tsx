import React from "react";
import ToastEditor from "@toast-ui/editor";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import hljs from "highlight.js";

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const TuiEditorWrapper = (props: TuiEditorWithForwardedProps) => {
  const youtube = () => {
    ToastEditor.codeBlockManager.setReplacer("youtube", function (youtubeId: string) {
      const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;

      setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);

      return `<div id="${wrapperId}"></div>`;
    });
  };

  function renderYoutube(wrapperId: string, youtubeId: string) {
    const el = document.querySelector(`#${wrapperId}`);

    el!.innerHTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${youtubeId}"></iframe>`;
  }

  return <Editor {...props} plugins={[[codeSyntaxHighlightPlugin, { hljs }], colorSyntaxPlugin, youtube]} ref={props.forwardedRef} />;
};

export default TuiEditorWrapper;
