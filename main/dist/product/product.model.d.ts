/// <reference types="mongoose" />
export declare class Product {
    id: number;
    title: string;
    image: string;
    likes: number;
}
export declare const productSchema: import("mongoose").Schema<import("mongoose").Document<Product, any>, import("mongoose").Model<any, any, any>, undefined>;
