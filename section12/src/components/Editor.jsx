import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

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

const Editor = () => {
  const emotionId = 5;

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="지금 기분은 어떤가요?" />
      </section>
      <section className="button_section">
        <Button text={"취소"} />
        <Button text={"완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
