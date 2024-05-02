// 1. 콜백함수

function main(value) {
 value();
}

// function sub() {
//   console.log("i am sub"); // callback 함수, 인수로 전달하여 main 함수에서 실행이 된다.
// }

main(() =>   {
  // console.log("i am sub");
}); 

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }  
}

repeat(5, function (idx) {
  console.log(idx)
});

repeat(5, function(idx) {
  console.log(idx * 2);
})

repeat(5, function(idx) {
  console.log(idx * 3);
})