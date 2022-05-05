import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFile {
  files: FileUpload[];
}

@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    // 객체안을 타입지정 하는 방법(interface), 밑에 file의 createStream을 쓰기위해 타입을 지정해준다.(타입 지정을 해주면 빨라지고, 안전해진다.)

    const storage = new Storage({
      keyFilename: '/my-secret/gcp-file-storage.json', // 클라우드에서 생성한 키!!
      projectId: 'myproject01-347906',
    }).bucket('main-project01');
    // .file(file.filename); // 프로젝트 아이디에 버킷 저기에 file이라고 받아온 곳에 있는 파일이름을 저장할거야!!(file.filename)

    //일단 먼저 다 받기
    const waitedFiled = await Promise.all(files);

    const results = await Promise.all(
      waitedFiled.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream().pipe(
            storage
              .file(el.filename)
              .createWriteStream() // 이 storage에 넣어줘!
              .on('finish', () => resolve(`main-project01/${el.filename}`)) // 읽은 내용을 가지고 2차적으로 작업을 할때 pipe를 사용 한다.(사이즈 변경, 화질 변경 등등), on에서는 결과를 받아오는 부분.
              .on('error', (error) => reject(error)), // 예) 완료하면 이 함수를 실행시켜줘.
          );
        }); // promise 형태로 만들고 async/await를 걸었다.
      }),
    ); // [file, file, fiel, ...] 이런식으로 들어있다.
    return results; // 위에서 성공하면, return을 해준다
  }
}
