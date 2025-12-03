import { Product } from "../features/product/product.entity";
import { Mapper } from "./mapper";

export class ProductMapper implements Mapper<Product, Product> {
  map(entity: Product): Product {
    return entity;
  }
}
