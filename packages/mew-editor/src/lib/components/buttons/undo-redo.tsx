import cx from "clsx";
import { ButtonProps } from "./types";

export const Undo = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().undo().run()}
      className={cx("editor-button")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H8z" />
      </svg>
    </button>
  );
};

export const Redo = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().redo().run()}
      className={cx("editor-button")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5V7z" />
      </svg>
    </button>
  );
};
