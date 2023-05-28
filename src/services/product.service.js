const { Product } = require("../database/models");

const getProducts = async () => {
  try {
    const products = await Product.findAll({
      include: [
        { association: "images" },
        { association: "subcategory", include: [{ association: "category" }] },
      ],
    });

    return products;
  } catch (error) {
    console.error("Error while fetching products: ", error);
    throw new Error("Error while fetching products");
  }
};
const getProductById = async (productId) => {
  try {
    const product = await Product.findByPk(productId, {
      include: [
        { association: "images" },
        { association: "subcategory", include: [{ association: "category" }] },
      ],
    });

    return product
  } catch (error) {
    console.error("Error while fetching product: ", error);
    throw new Error("Error while fetching product");
  }
};
const createProduct = async (productData) => {
  try {
    const createdProduct = await Product.create(productData);
    return createdProduct;
  } catch (error) {
    console.error("Error while creating product: ", error);
    throw new Error("Error while creating product");
  }
};
const updateProduct = async (productId, productData) => {
  try {
    const updatedProduct = await Product.update(productData, {
      where: { id: productId },
    });
    return updatedProduct;
  } catch (error) {
    console.error("Error while updating product: ", error);
    throw new Error("Error while updating product");
  }
};
const deleteProduct = async (productId) => {
  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    await product.destroy();

    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    console.error("Error while deleting product: ", error);
    throw new Error("Error while deleting product");
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
