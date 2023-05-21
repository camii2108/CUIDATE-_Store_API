const { User } = require("../database/models");

const getUsers = async (id) => {
  try {
    return await User.findAll(id);
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    throw new Error("Error al obtener usuarios");
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  insertUser,
  updateUser,
  deleteUser
};

