// new Promise((resolve, reject) => {
// 뭔가 특정 작업(API 보내기 등)
//   if (성공!!) {
//     resolve("철수");
//   }
//   if (실패!!) {
//     reject("애로에요!!!");
//   }
// });

const fetchData = async () => {
  console.time('=== 개별 Promise 각각 ===');
  const result1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공시 받는 데이터!!!');
    }, 2000);
  });

  const result2 = await new Promise((resolve, reject) => {
    //   뭔가 특정 작업(API 보내기 등)
    setTimeout(() => {
      resolve('성공시 받는 데이터!!!');
    }, 3000);
  });

  const result3 = await new Promise((resolve, reject) => {
    //   뭔가 특정 작업(API 보내기 등)
    setTimeout(() => {
      resolve('성공시 받는 데이터!!!');
    }, 1000);
  });
  console.timeEnd('=== 개별 Promise 각각 ===');
};

// Promise.all 을 썼을 겨우
const fetchData2 = async () => {
  console.time('=== 한방에 Promise.all ===');

  await Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('성공시 받는 데이터!!!');
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      //   뭔가 특정 작업(API 보내기 등)
      setTimeout(() => {
        resolve('성공시 받는 데이터!!!');
      }, 3000);
    }),
    new Promise((resolve, reject) => {
      //   뭔가 특정 작업(API 보내기 등)
      setTimeout(() => {
        resolve('성공시 받는 데이터!!!');
      }, 1000);
    }),
  ]); // 한방에 다 보내주고, 한방에 받는다!

  console.timeEnd('=== 한방에 Promise.all ===');
};

fetchData();
fetchData2();
