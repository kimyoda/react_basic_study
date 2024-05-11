import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 현재의 props와 과거의 props를 비교하여 리랜더링 할 지 말지 결정한다.(얕은비교)
// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환 값에 따라,  Props가 바뀌었는지 안바뀌었는 지 판단
  //  T -> Props 바뀌지 않음 -> 리랜더링 X
  //  F -> Props 바뀜 -> 리랜더링 O
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
