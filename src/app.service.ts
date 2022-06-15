import { Injectable } from '@nestjs/common';

import { Alfa } from './establishments/alfa';
import { Celeiro } from './establishments/celeiro';

@Injectable()
export class AppService {
  alfa: Alfa;
  celeiro: Celeiro;

  constructor() {
    this.alfa = new Alfa();
    this.celeiro = new Celeiro();
  }

  async product_search(product: string) {
    const alfaData = await this.alfa.product_search(product);
    const celeiroData = await this.celeiro.product_search(product);

    return [...alfaData, ...celeiroData];
  }
}
