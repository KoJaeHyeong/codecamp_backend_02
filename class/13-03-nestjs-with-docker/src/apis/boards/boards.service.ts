import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  findAll() {
     //비지니스 로직
    // DB에 접속해서 데이터를 꺼내오는 로직

    return [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
      {
        number: 2,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
      {
        number: 3,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용입니다!!!',
      },
    ];
  }

  create() {
     //비지니스 로직
    // DB에 접속해서 데이터를 등록하는 로직

    return '등록에 성공했습니다.';
  }
}
