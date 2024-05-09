import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// 컴포넌트가 리랜더링 하는 경우는 1. state 값 변경 2. props 값 변경 3. 부모 컴포넌트가 리랜더링 하는 경우

function App() {
  // state = 값, setState = 함수

  // 컴포넌트의 state값이 바뀌면 컴포넌트가 return을 다시 하고 그때 화면이 바뀐다.
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
