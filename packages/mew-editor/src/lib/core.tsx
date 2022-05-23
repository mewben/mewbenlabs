import { FocusPosition } from "@tiptap/core";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import HardBreak from "@tiptap/extension-hard-break";
import Placeholder from "@tiptap/extension-placeholder";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import CharacterCount from "@tiptap/extension-character-count";
import Code from "@tiptap/extension-code";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import History from "@tiptap/extension-history";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
// @ts-ignore
import { lowlight } from "lowlight";
import cx from "clsx";

import TrailingNode from "./extensions/trailing-node";
import { BubbleMenu as BubbleMenuContent } from "./components/bubble-menu";

import "./style.css";
import { Toolbar } from "./components/toolbar";

export interface MewEditorProps {
  content?: any;
  onChange: Function;
  mode?: "full" | "stripped";
  placeholder?: any;
  autofocus?: FocusPosition;
  characterLimit?: number;
}

const Core = ({
  content,
  onChange,
  mode = "full",
  placeholder = "Type / for commands...",
  autofocus = true,
  characterLimit,
}: MewEditorProps) => {
  const editor = useEditor({
    extensions: [
      // inline
      Bold,
      Italic,
      Underline,
      Strike,
      Code,
      Subscript,
      Superscript,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Typography,

      // node
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3], // up to h3
      }),
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      CodeBlockLowlight.configure({ lowlight }),
      HorizontalRule,
      TrailingNode,

      // functionality
      HardBreak,
      Placeholder.configure({
        placeholder,
      }),
      CharacterCount.configure({
        limit: characterLimit,
      }),
      History.configure({
        depth: 10,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onChange(json);
    },
    autofocus,
  });

  if (!editor) return null;

  return (
    <div className={cx("editor", mode)}>
      {mode === "full" && (
        <div className="editor-header">
          <Toolbar editor={editor} />
        </div>
      )}
      <EditorContent editor={editor} className="editor-content" />
      <div className="editor-footer">
        {!!characterLimit && (
          <div className="character-count text-xs">
            {editor.storage.characterCount.characters()}/{characterLimit}{" "}
            characters
            <br />
            {editor.storage.characterCount.words()} words
          </div>
        )}
      </div>
      {mode === "stripped" && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <BubbleMenuContent editor={editor} />
        </BubbleMenu>
      )}
    </div>
  );
};

export default Core;
