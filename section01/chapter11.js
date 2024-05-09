// 함수선언

// function greating () {
//   console.log("안녕하세요~");
// }


// greating();

// function getArea (width, height) { // 매개변수
//   let area = width * height;
//   function another() { // 중첩 함수
//     console.log("another");
//   }

//   another();

//   return area; // 반환값
// }


let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻 코드의 밑바닥에 작성 된 선언문을 최상단으로 끌어올려서 실행하게 한것을 이야기함
// 내부적으로 알아서 끌어올려서 실행을 한다.
//  좀 더 유연하게 코드의 프로그래밍을 작동할 수 있다.

function getArea (width, height) { // 매개변수
  let area = width * height;
  function another() { // 중첩 함수
    console.log("another");
  }

  another();

  return area; // 반환값
}