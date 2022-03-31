import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  findAll() {
    // DB에 접속해서 데이터를 꺼내오는 로직

    return [
      {
        menu: '아이스아메리카노',
        price: 1500,
        kcal: 1000,
        saturatedfat: 300,
        protein: 200,
        salt: 50,
        sugars: 10,
        Caffeine: 30,
      },
      {
        menu: '바닐라라떼',
        price: 2500,
        kcal: 900,
        saturatedfat: 30,
        protein: 100,
        salt: 30,
        sugars: 20,
        Caffeine: 10,
      },
      {
        menu: '따뜻한 아메리카노',
        price: 1500,
        kcal: 1010,
        saturatedfat: 300,
        protein: 210,
        salt: 10,
        sugars: 30,
        Caffeine: 60,
      },
      {
        menu: '퐁당치노',
        price: 3500,
        kcal: 456,
        saturatedfat: 120,
        protein: 902,
        salt: 410,
        sugars: 52,
        Caffeine: 10,
      },
      {
        menu: '몽땅쉐이크',
        price: 1200,
        kcal: 800,
        saturatedfat: 100,
        protein: 20,
        salt: 80,
        sugars: 30,
        Caffeine: 40,
      },
      {
        menu: '녹차라떼',
        price: 3500,
        kcal: 500,
        saturatedfat: 100,
        protein: 80,
        salt: 100,
        sugars: 10,
        Caffeine: 600,
      },
    ];
  }
  create() {
    // DB에 접속해서 데이터를 등록하는 로직

    return '등록에 성공했습니다.';
  }
}
