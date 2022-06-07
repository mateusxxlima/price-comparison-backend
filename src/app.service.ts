import { Injectable } from '@nestjs/common';

import { Alfa } from './establishments/alfa';

@Injectable()
export class AppService {

  alfa: Alfa;

  constructor () {
    this.alfa = new Alfa();
  }

  product_search(product: string) {
    const data = this.alfa.product_search(product);
    return data
  }
}
