import "./App.css";
import { useState } from "react";

function App() {
  // state = 값, setState = 함수
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  // 컴포넌트의 state값이 바뀌면 컴포넌트가 return을 다시 하고 그때 화면이 바뀐다.
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
