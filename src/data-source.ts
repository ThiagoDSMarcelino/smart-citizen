import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Product } from "./modules/product/product.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
  synchronize: false,
  logging: true,
  entities: [Product],
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],
});
