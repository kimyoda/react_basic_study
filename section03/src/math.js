// 계산 기능 함수
// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// CJS(Common js 모듈)
// 키와 벨류값이 같으면 한가지만 작성하면 됀다.

// module.exports = {
//   add,
//   sub,
// };

// ES 모듈
// export { add, sub };
