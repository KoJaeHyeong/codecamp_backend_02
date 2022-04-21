import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { Storage } from '@google-cloud/storage';

interface IFile {
  files: FileUpload[];
}

@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    const storage = new Storage({
      keyFilename: 'first-project01-347012-e2d0a770085d.json',
      projectId: 'first-project01-347012',
    }).bucket('main-project01');

    const waitedFiled = await Promise.all(files);

    const results = await Promise.all(
      waitedFiled.map((el) => {
        return new Promise((resolve, reject) => {
          el.createReadStream().pipe(
            storage
              .file(el.filename)
              .createWriteStream()
              .on(
                'finish',
                () => resolve(`main-project01/${el.filename}`), // 트리거 하위폴더 thumb에 저장 하기
              )
              .on('error', () => reject()),
          );
        });
      }),
    );

    return results;
  }
}
