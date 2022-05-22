import PropTypes from "prop-types";
import cx from "clsx";
import { Editor } from "@tiptap/core";

interface BubbleMenuProps {
  editor: Editor;
}

const BubbleMenu = ({ editor }: BubbleMenuProps) => {
  return (
    <div className="popup-wrapper">
      <div className="bubble-menu">
        <div className="bubble-menu_section">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cx("item", { active: editor.isActive("bold") })}
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cx("item", { active: editor.isActive("italic") })}
          >
            <em>i</em>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cx("item", { active: editor.isActive("underline") })}
          >
            <u>U</u>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={cx("item", { active: editor.isActive("strike") })}
          >
            <s>S</s>
          </button>
        </div>
      </div>
    </div>
  );
};

BubbleMenu.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default BubbleMenu;
