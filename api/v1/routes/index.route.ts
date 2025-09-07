import { Express } from "express";
import { productRoutes } from "./product.route";
import { categoryRoutes } from "./category.route";

const mainV1Routes = (app: Express): void => {
  
  const version = "/api/v1";

  app.use(version + "/products", productRoutes);

  app.use(`${version}/category`, categoryRoutes);

}

export default mainV1Routes;