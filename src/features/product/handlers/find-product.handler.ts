import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Product } from "../product.entity";

export class FindProductHandler {
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

      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
