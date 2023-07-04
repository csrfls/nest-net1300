import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getService(): string {
    const response = process.env.SERVICE || 'Service not found';
    return response;
  }

  getService2(): string[] {
    const dbUser = process.env.DATABASE_USER;
    return [dbUser];
  }
}
