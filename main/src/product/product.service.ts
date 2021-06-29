import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel) {}

  async all() {
    return this.productModel.find().exec();
  }

  async create(product) {
    const productCreated = await this.productModel.create(product);
    console.log(productCreated);
    return productCreated;
  }
}
