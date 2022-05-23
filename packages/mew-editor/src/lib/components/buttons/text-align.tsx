import cx from "clsx";
import { ButtonProps } from "./types";

export const AlignLeft = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().setTextAlign("left").run()}
      className={cx("editor-button", {
        active: editor.isActive({ textAlign: "left" }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
      </svg>
    </button>
  );
};

export const AlignCenter = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().setTextAlign("center").run()}
      className={cx("editor-button", {
        active: editor.isActive({ textAlign: "center" }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
      </svg>
    </button>
  );
};

export const AlignRight = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().setTextAlign("right").run()}
      className={cx("editor-button", {
        active: editor.isActive({ textAlign: "right" }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
      </svg>
    </button>
  );
};

export const AlignJustify = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().setTextAlign("justify").run()}
      className={cx("editor-button", {
        active: editor.isActive({ textAlign: "justify" }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
      </svg>
    </button>
  );
};
