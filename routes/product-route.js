import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product-controller.js";

const router = express.Router();

// router.route("/").get(getAllProducts);
// router.route("/:id").get(getProductById);
// router.route("/").post(createProduct);
// router.route("/:id").put(updateProductById);
// router.route("/:id").delete(deleteProductById);

router.route("/").get(getAllProducts).post(createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

export default router;
