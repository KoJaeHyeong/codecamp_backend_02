import { Injectable } from '@nestjs/common';

@Injectable() // Dependency를 resolver에 넣어주기 위해 데코레이터 선언 한거.
export class BoardService {
  findAll() {
    //비지니스 로직
    // DB에 접속해서 데이터를 꺼내오는 로직

    return [
      {
        number: 1,
        writer: '아이어맨',
        title: '제목이다',
        contents: '내용이래;;;',
      },
      {
        number: 1,
        writer: '캡틴아메리카',
        title: '제목이다',
        contents: '내용이래;;;',
      },
      {
        number: 1,
        writer: '재형파이더맨',
        title: '제목이다',
        contents: '내용이래;;;',
      },
    ];
  }
  create() {
    //비지니스 로직
    // DB에 접속해서 데이터를 등록하는 로직

    return '등록에 성공했습니다.';
  }
}
