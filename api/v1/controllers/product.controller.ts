import { Request, Response }  from "express";
import Product from "../models/product.model";

// [GET] /api/v1/products
export const index = async (req: Request, res: Response) => {
  interface Find {
    title?: string,
    category?: string,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    thumbnail?: string,
    description?: string,
    deleted: boolean,
  };

  const find: Find = {
    deleted: false,
  }

  const products = await Product.find(find);

  res.json(products);
}

// [GET] /api/v1/products/create
export const create = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    const data = await product.save();

    res.json({
      code: 200,
      message: "Tạo thành công!",
      data: data
    })
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!"
    })
  }
}

// [DELETE] /api/v1/products/delete/:id
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    console.log(id);

    await Product.updateOne({ _id: id }, {
      deleted: true,
    });

    res.json({
      code: 200,
      message: "Xóa thành công!"
    });
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!"
    });
  }
}

// [DELETE] /api/v1/products/edit/:id
export const editProduct = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    await Product.updateOne({ _id: id }, req.body);

    res.json({
      code: 200,
      message: "Cập nhật thành công!"
    });
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!"
    });
  }
}