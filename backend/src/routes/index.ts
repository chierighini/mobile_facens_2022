import { Router } from "express";

import { productRoutes } from "./product.routes";
import { casdatroRoutes } from "./cadastro.routes";


const routes = Router();

routes.use("/cadastro", casdatroRoutes);
routes.use("/product", productRoutes);

export { routes };
