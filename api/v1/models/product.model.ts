import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    thumbnail: String,
    description: String,
    deleted: {
      type: Boolean,
      default: false
    },
  }
);

const Product = mongoose.model("Product", productSchema, "products");

export default Product;