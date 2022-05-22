import cx from "clsx";
import { ButtonProps } from "./types";

export const Strike = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={cx("editor-button", { active: editor.isActive("strike") })}
    >
      <s>S</s>
    </button>
  );
};
