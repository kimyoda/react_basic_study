const Button = ({ text, color, children }) => {
  // 이벤트 객체(매개변수)
  // 합성 이벤트(모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태)
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      // 이벤트 핸들러(함수)
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
