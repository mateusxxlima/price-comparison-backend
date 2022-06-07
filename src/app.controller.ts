import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('search')
  product_search(@Query('product') product: string) {
    return this.appService.product_search(product);
  }
}
