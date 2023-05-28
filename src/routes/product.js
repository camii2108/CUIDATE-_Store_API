const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct
    /* getProductsPaginated */
} = require("../controllers/product.controller");
//const verifyToken = require("../middlewares/jwt.middleware");

router.get("/",  (req, res) => {
  getProducts(req, res);
});

router.get("/:id", (req, res) => {
  getProductById(req, res);
});

router.post("/", (req, res) => {
  createProduct(req, res);
});

router.put("/:id", (req, res) => {
  updateProduct(req, res);
});

/* router.get("/paginated", verifyToken, (req, res) => {
  getProductsPaginated(req, res);
}); */

module.exports = router;