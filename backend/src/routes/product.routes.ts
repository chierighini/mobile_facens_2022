import { Router } from "express";

import { CreateProductController } from "../modules/product/useCases/createProduct/CreateProductController";
import { GetProductController } from "../modules/product/useCases/getProduct/GetProductController";
import { UpdateProductController } from "../modules/product/useCases/updateProduct/UpdateProductController";
import { DeleteProductController } from "../modules/product/useCases/deleteProduct/DeleteProductController";

const createProductController = new CreateProductController();
const getProductController = new GetProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const productRoutes = Router();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", getProductController.handle);

productRoutes.post("/editproduct", updateProductController.handle);

productRoutes.post("/deleteproduct", deleteProductController.handle);

export { productRoutes };
