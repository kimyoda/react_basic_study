// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드(prmoise를 안쓰는 경우)
// 함수가 프로미스를  반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, rejec) => {
    setTimeout(() => {
      resolve({
        name: "김요한",
        id: "yoda",
      });
    }, 1500);
  });
  // return {
  //   name: "김요한",
  //   id: "yoda",
  // };
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
