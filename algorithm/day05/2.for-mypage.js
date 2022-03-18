const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


let count = 0;
let str = "";
let sum = 0; 

for( i=0; i < myShopping.length; i++) {
  if(myShopping[i].category === "의류") {
    count += 1;
    sum += myShopping[i].price;
  }
}
if(count >= 5) {
    str = "Gold"
  } else if(count >= 3) {
    str = "Silver"
  } else {
    str = "Bronze"
  }


console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}원이며 등급은 ${str}입니다.`)
