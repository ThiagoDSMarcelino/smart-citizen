import { Request, Response } from "express";
import { Between, ILike } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { Product } from "../product.entity";

export class ListProductsHandler {
  private readonly repository = AppDataSource.getRepository(Product);

  async handle(req: Request, res: Response) {
    try {
      const { name, category, minPrice, maxPrice } = req.query as {
        name?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
      };

      const whereCondition: any = {};

      if (name) {
        whereCondition.name = ILike(`%${name}%`);
      }

      if (category) {
        whereCondition.category = ILike(`%${category}%`);
      }

      if (minPrice && maxPrice) {
        whereCondition.price = Between(Number(minPrice), Number(maxPrice));
      }

      const products = await this.repository.find({
        where: whereCondition,
        order: { createdAt: "DESC" },
      });

      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching products" });
    }
  }
}
