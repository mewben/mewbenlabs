import {
  Bold,
  Italic,
  Underline,
  Strike,
  Code,
  CodeBlock,
  Highlight,
} from "../buttons";
import { ButtonProps } from "../buttons/types";

const Toolbar = ({ editor }: ButtonProps) => {
  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <Bold editor={editor} />
        <Italic editor={editor} />
        <Underline editor={editor} />
        <Strike editor={editor} />
        <Code editor={editor} />
        <Highlight editor={editor} />
      </div>
      <div className="toolbar-section">
        <CodeBlock editor={editor} />
      </div>
    </div>
  );
};

export default Toolbar;
