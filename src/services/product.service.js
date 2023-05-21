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

module.exports = {
    getProducts,
}
