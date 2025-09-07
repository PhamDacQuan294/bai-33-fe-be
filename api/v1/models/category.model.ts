import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    deleted: {
      type: Boolean,
      default: false
    },
  }
);

const Category = mongoose.model("Category", categorySchema, "category");

export default Category;