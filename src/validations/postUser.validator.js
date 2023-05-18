const { body } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body("pass").notEmpty().withMessage("Password is required"),
    body("role").isInt().withMessage("Invalid role"),
    body("avatar").optional().isURL().withMessage("Invalid avatar URL"),
  ];
};

module.exports = {
  userValidationRules,
};
