const { body } = require("express-validator");

const productValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("El nombre es obligatorio"),
    body("price").notEmpty().withMessage("El precio es requerido").isInt().withMessage("Precio inválido"),
    body("discount").optional().isInt().withMessage("Descuento inválido"),
    body("description").optional().isLength({ max: 800 }).withMessage("La descripción supera la longitud máxima"),
    body("subcategory_id").notEmpty().withMessage("El ID de la subcategoría es requerido").isInt().withMessage("ID de subcategoría inválido"),
  ];
};

module.exports = {
  productValidationRules,
};