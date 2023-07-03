import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getService(): string {
    return '';
  }

  getService2(): string[] {
    const dbUser = process.env.DATABASE_USER;
    return [dbUser];
  }
}
