const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user.controller");
const { userRegisterValidationRules } = require("../validations/registerUser.validator");
const validate = require("../validations/index.validator");
const userLoginValidationRules = require("../validations/loginUser.validator");

router
<<<<<<< HEAD
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/login", userLoginValidationRules(), validate, login)
  .post("/register", userRegisterValidationRules(), validate, createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
=======
    .get("/", getUsers)
module.exports = router;
>>>>>>> 6bcb68b9c3ed1199d7d2d2018c3521eaef43e371
