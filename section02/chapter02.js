// 단락평가(Short-circuit Evaluation)이란?
let varA = false;
let varB = true;

// And 연산자
// console.log(varA && varB); //varA가 false이기에 앞에선 연산이 끝남

// // Or 연산자
// console.log(varB || varA); // 첫번째 값이 true이기 때문에 무조건 true만 나온다.

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "김요한" });
