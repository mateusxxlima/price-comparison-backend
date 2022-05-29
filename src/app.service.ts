import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Comparador de preços dos principais supermercados da cidade de Chapecó'
    };
  }
}
