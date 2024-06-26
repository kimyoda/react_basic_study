// 원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다름
// 원시타입은 값 자체로써 변수에 저장되고 복사 된다, 불변값이다 (메모리 값 수정 X)
// 객체 타입은 참조값을 통해 변수에 저장되고 복사 된다, 가변값이다 (메모리 값 수정 O)

// 원시타입 = 불변값

let p1 = 1; // p1 -> 1(Memory)
let p2 = p1; // p1 -> 1

p2 = 2; // p2 -> 2(실제 메모리의 값은 수정되지 않는다.)

// 객체 타입 = 가변값, 주의사항
// 1. 의도치 않게 값이 수정될 수 있다.

let o1 = { name: "김요한" }; // o1 -> 참조값(0x0000c) -> {name : "김요한"}
let o2 = { ...o1 }; // o2와 o1이 참조값 0x0000C
o2.name = "홍길동";

// 얕은 복사 let o1 = { name : "김요한"}; let o2 = o1;, 객체의 참조값을 복사한다. 원본 객체가 수정될 수 있어 위험하다.
// 깊은 복사 let o1 = {name : "김요한"}ㅣ, let o2 = { ...o1} ; 새로운 객체를 생성하면서 프로퍼티만 따로 복사 한다. 원본 객체가 수정될 일이 없어 안전한다.

// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
// let o1 = {name : "김요한"};, let o2 = o1;, let o3 = { ...o1 };
// console.log(o1 === o2); 같은 값으로 나와 true
// console.log(o1 === o3); 참조값이 다르기 때문에 같지 않기에 false이다.

// console.log( JSON.stringift(o1) === JSON.stringify(o3)); 결과 : True
// 얕은비교
// 참조값을 기준으로 비교
o1 === o2;

// 깊은비교
// 객체를 문자열로 변환하여 비교, JSON.stringify 등의 내장함수를 이용해야 한다.
JSON.stringify(o1) === JSON.stringify(o2);

// 3. 배열과 함수도 사실 객체이다.
// 함수(추가된 기능, 호출, 선언), 배열(추가된 기능, 순차 저장, 순회)
