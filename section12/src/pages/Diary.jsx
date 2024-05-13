import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viwer from "../components/Viwer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  usePageTitle(`${[params.id]}번 일기장`);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viwer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
