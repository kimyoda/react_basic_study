// 순회(lteration)이란?
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말한다.

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
  // console.log(item);
}

// 2. 객체 순회
let person = {
  name: "김요한",
  age: "31",
  hobby: "러닝",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  // 배열은 for of
  const value = person[key];
  // console.log(key, value);
}

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
// }

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for (let value of values) {
  // console.log(value);
}

// 2.3 for in, 객체만
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
