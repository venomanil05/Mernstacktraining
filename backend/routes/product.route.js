import express from 'express';

import {
    addproduct,
    getproductbyid,
    getproducts
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getproducts);

router.get("/:id", getproductbyid);

router.post("/", addproduct);

export default router;