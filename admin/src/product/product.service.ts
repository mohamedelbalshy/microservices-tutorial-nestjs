import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create({ title, image }): Promise<Product> {
    return await this.productRepository.save({ title, image });
  }

  async getById(id: number): Promise<Product> {
    return await this.productRepository.findOne({ id });
  }

  async updateOne(
    id: number,
    { title, image }: { title: string; image: string },
  ): Promise<UpdateResult> {
    return await this.productRepository.update({ id }, { title, image });
  }

  async delete(id: number) {
    return await this.productRepository.delete({ id });
  }
}
