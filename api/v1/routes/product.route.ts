import { Router } from "express";
const router: Router = Router();

import * as controller from "../controllers/product.controller";

router.get("/", controller.index);

router.post("/create", controller.create);

router.delete("/delete/:id", controller.deleteProduct);

router.patch("/edit/:id", controller.editProduct);

export const productRoutes: Router = router;