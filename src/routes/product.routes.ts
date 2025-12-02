import { Router } from "express";
import { CreateProductHandler } from "../modules/product/handlers/create-product.handler";
import { DeleteProductHandler } from "../modules/product/handlers/delete-product.handler";
import { ListProductsHandler } from "../modules/product/handlers/list-products.handler";
import { UpdateProductHandler } from "../modules/product/handlers/update-product.handler";
import { FindProductHandler } from "../modules/product/handlers/find-product.handler";

const productRouter = Router();

const createProduct = new CreateProductHandler();
const listProducts = new ListProductsHandler();
const getProduct = new FindProductHandler();
const updateProduct = new UpdateProductHandler();
const deleteProduct = new DeleteProductHandler();

productRouter.post("/", (req, res) => createProduct.handle(req, res));

productRouter.get("/", (req, res) => listProducts.handle(req, res));

productRouter.get("/:id", (req, res) => getProduct.handle(req, res));

productRouter.put("/:id", (req, res) => updateProduct.handle(req, res));

productRouter.delete("/:id", (req, res) => deleteProduct.handle(req, res));

export { productRouter };
