import cx from "clsx";
import { ButtonProps } from "./types";

export const Underline = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      className={cx("editor-button", { active: editor.isActive("underline") })}
    >
      <u>U</u>
    </button>
  );
};
