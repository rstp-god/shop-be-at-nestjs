import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiTags('Hello World!')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
