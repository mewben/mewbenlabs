import { Bold, Italic, Underline, Strike, Code, Highlight } from "../buttons";
import { ButtonProps } from "../buttons/types";

const BubbleMenu = ({ editor }: ButtonProps) => {
  return (
    <div className="popup-wrapper">
      <div className="bubble-menu">
        <div className="bubble-menu_section">
          <Bold editor={editor} />
          <Italic editor={editor} />
          <Underline editor={editor} />
          <Strike editor={editor} />
          <Code editor={editor} />
          <Highlight editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default BubbleMenu;
