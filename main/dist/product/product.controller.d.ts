import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(): Promise<any>;
    productCreated(data: any): Promise<any>;
}
