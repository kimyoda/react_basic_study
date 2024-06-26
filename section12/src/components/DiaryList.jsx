import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DirayItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState("latest");

  // 이벤트 핸들러
  const onChangeSortTyep = (e) => {
    setSortType(e.target.value);
  };

  // sort 함수 활용하여 정렬기준 생성
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    });
  };

  const sortData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortTyep}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortData.map((item) => (
          <DirayItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
