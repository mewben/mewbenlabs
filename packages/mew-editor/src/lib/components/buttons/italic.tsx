import cx from "clsx";
import { ButtonProps } from "./types";

export const Italic = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={cx("editor-button", { active: editor.isActive("italic") })}
    >
      <em>i</em>
    </button>
  );
};
