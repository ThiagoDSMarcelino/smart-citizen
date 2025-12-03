import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Product } from "../product.entity";

export class UpdateProductHandler {
  private readonly repository = AppDataSource.getRepository(Product);

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
      }

      const product = await this.repository.findOneBy({ id });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      this.repository.merge(product, req.body);

      const updatedProduct = await this.repository.save(product);

      return res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error updating product" });
    }
  }
}
