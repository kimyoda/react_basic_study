// Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장객체
// Promise는 비동기 작업을 감싸는 객체이다.
// 비동기 작업 실행, 작업 상태 관리, 작업 결과 저장, 작업 병렬 실행, 작업 다시 실행
// 3가지 상태(대기(peding) - 아직 작업이 완료되지 않은상태, 성공 (Fultfilled) - 비동기 작업이 성공적으로 마무리 된 상태, 실패(Rejected) - 비동기 작업이 실패한 상태)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //   // 비동기 작업 실행하는 함수
    //   // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     const num = null;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다");
//     }
//   }, 2000);
// });

// then 메서드
// -> 그 후에
// promise 체이닝 문법
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
