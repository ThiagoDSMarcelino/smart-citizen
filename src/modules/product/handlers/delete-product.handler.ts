import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Product } from "../product.entity";

export class DeleteProductHandler {
  private readonly repository = AppDataSource.getRepository(Product);

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "Product ID is required" });
      }

      const result = await this.repository.delete(id);

      if (result.affected === 0) {
        return res.status(404).json({ message: "Product not found" });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error deleting product" });
    }
  }
}
