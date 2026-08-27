import express from "express";

import {
    getProducts,
    addProduct,
    getProductByID,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Add a product
router.post("/", addProduct);

// Get product by ID
router.get("/:id", getProductByID);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

export default router;
