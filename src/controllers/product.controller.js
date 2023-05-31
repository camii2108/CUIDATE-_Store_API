const { getProducts, getProductById } = require("../services/product.service");
const { Product } = require("../database/models");


module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await getProducts();
      const productsResponse = products.map(
        ({ id, name, description, images, subcategory }) => {
          return {
            id,
            name,
            description,
            images,
            subcategory,
            detail: `/api/products/${id}`
          };
        }
      );

      const getProductCountByCategory = (products) => {
        const categoryCount = {};

        for (const product of products) {
          const categoryName = product.subcategory.category.name;

          if (categoryCount.hasOwnProperty(categoryName)) {
            categoryCount[categoryName]++;
          } else {
            categoryCount[categoryName] = 1;
          }
        }

        return categoryCount;
      }

      const RESPONSE = {
        count: products.length,
        countByCategory: getProductCountByCategory(products),
        products: productsResponse,
      }

      return res.status(200).json(RESPONSE);
    } catch (error) { }
  },
  getProductById: async (req, res) => {
    const PRODUCT_ID = req.params.id;
    const product = await getProductById(PRODUCT_ID);

    return res.status(200).json(product);
  },
  createProduct: async (req, res) => {
    try {
      const { name, price, subcategory_id } = req.body;

      if (!name || !price || !subcategory_id) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const newProduct = await Product.create({
        name,
        price,
        subcategory_id,
      });

      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ error: "Error al crear el producto" });
    }
  },



  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const { name, price, subcategory_id } = req.body;

      const existingProduct = await Product.findByPk(productId);
      if (!existingProduct) {
        return res.status(404).json({ error: "El producto no existe" });
      }

      existingProduct.name = name;
      existingProduct.price = price;
      existingProduct.subcategory_id = subcategory_id;

      await existingProduct.save();

      return res.status(200).json(existingProduct);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar el producto" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      const existingProduct = await getProductById(productId);
      if (!existingProduct) {
        return res.status(404).json({ error: "El producto no existe" });
      }

      await Product.destroy({
        where: {
          id: productId,
        },
      });

      return res.status(200).json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({ error: "Error al eliminar el producto" });
    }
  },
};