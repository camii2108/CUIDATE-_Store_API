const express = require("express");
const router = express.Router();
const {
  getUsers,
  //getUserById
  //createUser
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user.controller");
//registervalidation
const validate = require("../validations/index.validator");
const userLoginValidationRules = require("../validations/loginUser.validator");

router
    .get("/", getUsers)
    //get id
    .post("/login", userLoginValidationRules(), validate, login)
    //register
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);
module.exports = router;