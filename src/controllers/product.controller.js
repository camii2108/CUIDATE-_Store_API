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

          if(categoryCount.hasOwnProperty(categoryName)){
            categoryCount[categoryName]++;
          }else{
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
    } catch (error) {}
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
  
  
  
  updateProduct: async (req, res) => {},
  deleteProduct: async (req, res) => {},
};