import cx from "clsx";
import { ButtonProps } from "./types";

export const Heading1 = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      className={cx("editor-button", {
        active: editor.isActive("heading", { level: 1 }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" />
      </svg>
    </button>
  );
};

export const Heading2 = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      className={cx("editor-button", {
        active: editor.isActive("heading", { level: 2 }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" />
      </svg>
    </button>
  );
};

export const Heading3 = ({ editor }: ButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      className={cx("editor-button", {
        active: editor.isActive("heading", { level: 3 }),
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
      </svg>
    </button>
  );
};
