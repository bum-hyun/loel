import React from "react";
import ToastEditor from "@toast-ui/editor";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const TuiEditorWrapper = (props: TuiEditorWithForwardedProps) => {
  const prism = () => {
    function registerRequire(language: string) {
      const requires = languages[language].require;
      if (requires) {
        if (typeof requires === "string") {
          registerRequire(requires);
        } else {
          requires.forEach((item: string) => registerRequire(item));
        }
        registerLanguage(language);
      } else {
        registerLanguage(language);
      }
    }

    function registerLanguage(language: string) {
      require(`prismjs/components/prism-${language}.min.js`);
      ToastEditor.codeBlockManager.setReplacer(language, (code: string) => {
        return Prism.highlight(code, Prism.languages[language], language);
      });
    }

    const { languages } = require("prismjs/components");

    for (const language in languages) {
      if (language !== "meta" && languages[language].option !== "default") {
        registerRequire(language);
      }
    }
  };
  const youtube = () => {
    ToastEditor.codeBlockManager.setReplacer("youtube", (youtubeId: string) => {
      const wrapperId = `yt${Math.random().toString(36).substr(2, 10)}`;

      setTimeout(renderYoutube.bind(null, wrapperId, youtubeId), 0);

      return `<div id="${wrapperId}"></div>`;
    });
  };

  function renderYoutube(wrapperId: string, youtubeId: string) {
    const el = document.querySelector(`#${wrapperId}`);

    el!.innerHTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${youtubeId}"></iframe>`;
  }

  return <Editor {...props} plugins={[colorSyntaxPlugin, youtube, prism]} ref={props.forwardedRef} />;
};

export default TuiEditorWrapper;
