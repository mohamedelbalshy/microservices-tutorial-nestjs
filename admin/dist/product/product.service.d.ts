import { Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    all(): Promise<Product[]>;
    create({ title, image }: {
        title: any;
        image: any;
    }): Promise<Product>;
    getById(id: number): Promise<Product>;
    updateOne(id: number, { title, image }: {
        title: string;
        image: string;
    }): Promise<UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
