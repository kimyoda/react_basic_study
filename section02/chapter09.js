// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "김요한", hobby: "러닝" },
  { name: "자르반", hobby: "러닝" },
  { name: "페이커", hobby: "명상" },
];

const runningPeople = arr1.filter((item) => item.hobby === "러닝");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 문자는 정렬, 숫자는 정상적으로 이루어지지 않음
// 정렬하려면 양수, 아닐 시 음수
// let arr3 = ["b", "a", "c"];
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a앞으로, 오름차순
    return 1; // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞으로, 내림차순
    return -1; // a, b 배치
  } else {
    //  두 값의 자리를 동일시
    return 0; // a, b 자리를 그대로 유지
  }
});
console.log(arr3);

// 4. toSorted(최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined);
