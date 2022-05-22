import cx from "clsx";
import { ButtonProps } from "./types";

export const Bold = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={cx("editor-button", { active: editor.isActive("bold") })}
    >
      <strong>B</strong>
    </button>
  );
};
