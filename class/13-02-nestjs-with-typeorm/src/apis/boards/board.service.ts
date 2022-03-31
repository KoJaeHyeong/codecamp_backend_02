import { Injectable } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class BoardService {
  findAll() {
    // DB에 접속해서 데이터를 꺼내오는 로직

    return [
      {
        number: 1,
        writer: '박주비 똥멍청이',
        title: '노재수',
        contents: '가다가 엎어져라',
      },
      {
        number: 1,
        writer: '철수',
        title: '제목이다',
        contents: '내용이래;;;',
      },
      {
        number: 1,
        writer: '철수',
        title: '제목이다',
        contents: '내용이래;;;',
      },
    ];
  }
  create() {
    // DB에 접속해서 데이터를 등록하는 로직

    return '등록에 성공했습니다.';
  }
}
