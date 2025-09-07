import { Request, Response }  from "express";
import Category from "../models/category.model";

// [GET] /api/v1/category
export const index = async (req: Request, res: Response) => {
  interface Find {
    name?: string,
    deleted: boolean,
  };

  const find: Find = {
    deleted: false
  }

  const category = await Category.find(find);

  res.json(category);
}