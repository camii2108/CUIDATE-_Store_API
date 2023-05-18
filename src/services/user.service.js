const { User } = require("../database/models");

const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    throw new Error("Error al obtener usuarios");
  }
};

module.exports = {
  getUsers,
};