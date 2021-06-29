import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @EventPattern('product_created')
  async productCreated(data) {
    return this.productService.create(data);
  }
}
