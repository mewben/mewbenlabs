import cx from "clsx";
import { ButtonProps } from "./types";

export const Hr = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
      className={cx("editor-button")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z" />
      </svg>
    </button>
  );
};
