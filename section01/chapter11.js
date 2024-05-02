// 함수선언

// function greating () {
//   console.log("안녕하세요~");
// }


// greating();

function getArea (width, height) { // 매개변수
  let area = width * height;
  function another() {
    console.log("another");
  }

  another();

  return area; // 반환값
}

let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);
