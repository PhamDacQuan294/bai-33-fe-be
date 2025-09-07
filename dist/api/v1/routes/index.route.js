"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_route_1 = require("./product.route");
const category_route_1 = require("./category.route");
const mainV1Routes = (app) => {
    const version = "/api/v1";
    app.use(version + "/products", product_route_1.productRoutes);
    app.use(`${version}/category`, category_route_1.categoryRoutes);
};
exports.default = mainV1Routes;
