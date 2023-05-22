const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
    getProductsPaginated
} = require("../controllers/product.controller");
const verifyToken = require("../middlewares/jwt.middleware");

router
    .get("/", verifyToken, getProducts)
    .get("/:id", getProductById)
    .get("/paginated", verifyToken, getProductsPaginated); //Nueva ruta de paginacion
    
module.exports = router;