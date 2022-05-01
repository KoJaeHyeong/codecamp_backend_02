import { Injectable } from '@nestjs/common';
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
    // const result = [];
    // for (let i = 0; i < mainUrl.length; i++) {
    //   result.push(mainUrl[i]);
    //   const result1 = [];
    //   for (let i = 0; i < subUrl.length; i++) {
    //     result1.push(subUrl[i]);
    //   }
    //   await this.rentImageRepository.save({
    //     mainUrl,
    //     subUrl,
    //     rent: { id: rentId },
    //   });
    // }
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
