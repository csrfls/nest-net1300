import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getService();
  }

  @Get('/2')
  getHello2(): string[] {
    return this.appService.getService2();
  }

  @Get('/ok')
  getOk(): number {
    return 200;
  }
}
