import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

// 부모 컴포넌트는 props로 전달가능, 하나의 state는 공통분모가 돼는 곳에 만들어야 한다.
// 계층구조상으로 위로끌려올려서 아래에 전부 공유할 수 있도록 하는 것을
// State Lifting(State 끌어 올리기)
// React.js의 데이터흐름은 위에서 아래로 흐른다.(단방향 데이터 흐름이다.)
function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
