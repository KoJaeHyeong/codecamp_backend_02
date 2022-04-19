import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileService } from './file.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class FileResolver {
  constructor(
    private readonly fileService: FileService, //
  ) {}

  @Mutation(() => [String]) // 여러개를 받을거기 때문에 배열로!
  uploadFile(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[], // 이 부분은 타입을 지정 하는 부분, 여러개를 받을거기 때문에 배열로!
  ) {
    return this.fileService.upload({ files });
  }
}
