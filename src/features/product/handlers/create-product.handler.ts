import { Request, Response } from "express";
import { Product } from "../product.entity";
import { AppDataSource } from "../../../data-source";

export class CreateProductHandler {
  private readonly repository = AppDataSource.getRepository(Product);

  async handle(req: Request, res: Response) {
    try {
      const { name, description, price, category, stock, discount } = req.body;

      const product = this.repository.create({
        name,
        description,
        price,
        category,
        stock,
        discount,
      });

      await this.repository.save(product);

      return res.status(201).json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating product" });
    }
  }
}
