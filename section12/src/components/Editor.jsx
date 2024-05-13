import { useEffect, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "기분 매우좋음",
  },
  {
    emotionId: 2,
    emotionName: "기분 좋음",
  },
  {
    emotionId: 3,
    emotionName: "기분 무난",
  },
  {
    emotionId: 4,
    emotionName: "기분 우울",
  },
  {
    emotionId: 5,
    emotionName: "기분 절망",
  },
];

const Editor = ({ onSubmit, initData }) => {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
      });
    }
  }, [initData]);

  const getStringedDate = (targetDate) => {
    // 날짜 -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
  };

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="지금 기분은 어떤가요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소"} />
        <Button onClick={onSubmitButtonClick} text={"완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
