import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'On Production';
  }

  getHello2(): string {
    return 'On Production Dos';
  }
}
