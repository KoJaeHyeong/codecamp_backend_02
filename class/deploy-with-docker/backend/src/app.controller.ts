import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') // Get 방식이라는 뜻
  getHello(): string {
    return this.appService.getHello();
  }
}
