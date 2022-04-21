import { Injectable } from '@nestjs/common';
import { OrphanedTypesFactory } from '@nestjs/graphql/dist/schema-builder/factories/orphaned-types.factory';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentImage } from './entities/rentImage.entity';

@Injectable()
export class RentImageService {
  constructor(
    @InjectRepository(RentImage)
    private readonly rentImageRepository: Repository<RentImage>,
  ) {}

  async create({ rentId, mainUrl, subUrl }) {
    // 배열에 이미지 주소 담기.
    // 메인이미지

    for (let i = 0; i < mainUrl.length; i++) {
      await this.rentImageRepository.save({
        mainUrl: mainUrl[i],
        rent: { id: rentId },
      });
      // console.log(mainUrl, '-----------============');
      // await this.rentImageRepository.save(result); // 행을 통째로 넣는 거기 때문에 객체표현을 지워서 넣는다.

      // console.log(finalImages, '===============');
    }

    // for (let i = 0; i < subUrl.length; i++) {
    //   const result = this.rentImageRepository.create({
    //     subUrl: subUrl[i],
    //     rent: { id: rentId },
    //   });
    //   await this.rentImageRepository.save(result); // 행을 통째로 넣는 거기 때문에 객체표현을 지워서 넣는다.
    //   finalImages.push(result);
    // }
    const finalImages = await this.rentImageRepository.findOne({
      id: rentId,
    });
    return finalImages;
  }

  async update({ updateRentImageInput }) {
    // Rent에서 찾아와서 그 값을 다 넣어줘야 플레이그라운드에서 가져올수 있다. 아침에 오면 바꾸자!
    await this.rentImageRepository.delete({
      rent: updateRentImageInput.rentId,
    });

    return await this.rentImageRepository.save({
      ...updateRentImageInput,
      rent: { id: updateRentImageInput.rentId },
    });
  }
}
