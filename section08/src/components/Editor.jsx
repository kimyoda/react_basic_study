import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  // 이벤트 헨들러
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };

  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};

export default Editor;
