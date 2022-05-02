import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addAbortSignal } from 'stream';
import { Repository } from 'typeorm';
import { RentImage } from './entities/rentImage.entity';

@Injectable()
export class RentImageService {
  constructor(
    @InjectRepository(RentImage)
    private readonly rentImageRepository: Repository<RentImage>,
  ) {}

  async create({ rentId, mainUrl, subUrl }) {
    // 메인이미지, 서브이미지 배열에 담기
    console.log('====================');
    const result = await mainUrl.map((el) => {
      return el;
    });
    console.log(result, 'AAA');

    const result2 = await subUrl.map((el) => {
      return el;
    });
    console.log(result2, 'BBB');

    return await this.rentImageRepository.save({
      mainUrl: result,
      subUrl: result2,
      rent: { id: rentId },
    });
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
