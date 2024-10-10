import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5001;

import productRouter from "./routes/product-route.js";
import connectToDb from "./config/db-config.js";
connectToDb();

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`server running on port http://localhost:${port}`);
});
