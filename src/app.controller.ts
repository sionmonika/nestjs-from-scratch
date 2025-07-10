import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 👉 Route for root URL: GET /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}