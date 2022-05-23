import { Tools } from "../buttons";
import { ButtonProps } from "../buttons/types";

const BubbleMenu = ({ editor }: ButtonProps) => {
  return (
    <div className="popup-wrapper">
      <div className="bubble-menu">
        <Tools editor={editor} />
      </div>
    </div>
  );
};

export default BubbleMenu;
