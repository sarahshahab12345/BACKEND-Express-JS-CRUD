import mongoose from "mongoose";

const productModel = mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please Enter a Product Name"],
  },
  productPrice: {
    type: Number,
    required: [true, "Please Enter a Product Price"],
  },
  productCategory: {
    type: String,
    required: [true, "Please Enter a Product Category"],
  },
});

const Product = mongoose.model("Product", productModel);

export default Product;
