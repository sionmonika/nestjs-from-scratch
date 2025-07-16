import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface ProductById {
  id: number;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  categoryId?: string;


}

@Controller()
export class ProductsController {
  @GrpcMethod('ProductsService', 'GetProduct')
  getProduct(data: ProductById): Product {
    const products = [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Phone', price: 500 },
    ];
    return products.find(p => p.id === data.id) ?? { id: 0, name: 'Not found', price: 0 };
  }
}
