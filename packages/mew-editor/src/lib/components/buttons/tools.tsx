import {
  Bold,
  Italic,
  Underline,
  Strike,
  Code,
  CodeBlock,
  Subscript,
  Superscript,
  Highlight,
  Heading1,
  Heading2,
  Heading3,
  UnorderedList,
  OrderedList,
  Blockquote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Hr,
  Undo,
  Redo,
} from ".";
import { ButtonProps } from "./types";

const Tools = ({ editor }: ButtonProps) => {
  return (
    <>
      <div className="tools-section">
        <Bold editor={editor} />
        <Italic editor={editor} />
        <Underline editor={editor} />
        <Strike editor={editor} />
        <Code editor={editor} />
        <Subscript editor={editor} />
        <Superscript editor={editor} />
        <Highlight editor={editor} />
      </div>
      <div className="tools-section">
        <Heading1 editor={editor} />
        <Heading2 editor={editor} />
        <Heading3 editor={editor} />
        <UnorderedList editor={editor} />
        <OrderedList editor={editor} />
        <CodeBlock editor={editor} />
      </div>
      <div className="tools-section">
        <Blockquote editor={editor} />
        <Hr editor={editor} />
      </div>
      <div className="tools-section">
        <AlignLeft editor={editor} />
        <AlignCenter editor={editor} />
        <AlignRight editor={editor} />
        <AlignJustify editor={editor} />
      </div>
      <div className="tools-section">
        <Undo editor={editor} />
        <Redo editor={editor} />
      </div>
    </>
  );
};

export default Tools;
