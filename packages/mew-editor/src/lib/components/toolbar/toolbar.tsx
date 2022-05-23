import { Tools } from "../buttons";
import { ButtonProps } from "../buttons/types";

const Toolbar = ({ editor }: ButtonProps) => {
  return (
    <div className="toolbar">
      <Tools editor={editor} />
    </div>
  );
};

export default Toolbar;
