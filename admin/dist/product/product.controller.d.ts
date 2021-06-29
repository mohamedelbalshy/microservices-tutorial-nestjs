import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    private readonly clinetProxy;
    constructor(productService: ProductService, clinetProxy: ClientProxy);
    list(): Promise<import("./product.entity").Product[]>;
    create(title: string, image: string): Promise<import("./product.entity").Product>;
    getById(id: number): Promise<import("./product.entity").Product>;
    update(id: number, title: string, image: string): Promise<import("./product.entity").Product>;
    delete(id: number): Promise<void>;
}
