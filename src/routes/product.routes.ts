import { Router, Request, Response } from "express";

import { CreateProductHandler } from "../features/product/handlers/create-product.handler";
import { DeleteProductHandler } from "../features/product/handlers/delete-product.handler";
import { FindProductHandler } from "../features/product/handlers/find-product.handler";
import { ListProductsHandler } from "../features/product/handlers/list-products.handler";
import { UpdateProductHandler } from "../features/product/handlers/update-product.handler";
import { createProductSchema } from "../features/product/validators/create-product.validator";
import { checkSchema } from "express-validator";
import { validateRequest } from "../shared/middlewares/validate-request.middleware";
import { updateProductSchema } from "../features/product/validators/update-product.validator";

const productRouter = Router();

const createProduct = new CreateProductHandler();
const listProducts = new ListProductsHandler();
const getProduct = new FindProductHandler();
const updateProduct = new UpdateProductHandler();
const deleteProduct = new DeleteProductHandler();

productRouter.post(
  "/",
  checkSchema(createProductSchema),
  validateRequest,
  (req: Request, res: Response) => createProduct.handle(req, res)
);

productRouter.get("/", (req: Request, res: Response) =>
  listProducts.handle(req, res)
);

productRouter.get("/:id", (req: Request, res: Response) =>
  getProduct.handle(req, res)
);

productRouter.patch(
  "/:id",
  checkSchema(updateProductSchema),
  validateRequest,
  (req: Request, res: Response) => updateProduct.handle(req, res)
);

productRouter.delete("/:id", (req: Request, res: Response) =>
  deleteProduct.handle(req, res)
);

export { productRouter };
