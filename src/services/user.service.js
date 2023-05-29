const { User } = require("../database/models");

const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    throw new Error("Error al obtener usuarios");
  }
};
const getUserById = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    throw new Error("Error al obtener usuarios");
  }
};
const getUserByEmail = async (email) => {
  try {
    return await User.findOne({
      where: {
        email,
      },
    });
  } catch (error) {
    console.error("Error al buscar usuarios:", error);
    throw new Error("Error al obtener usuarios");
  }
};
const insertUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    console.error("Error durante la inserción del usuario:", error);
    throw new Error("Error al insertar el usuario");
  }
};
const updateUser = async (userData) => {
  try {
    return await User.update(userData, { where: { id: userData.id } });
  } catch (error) {
    console.error("Error durante el guardado de usuario:", error);
    throw new Error("Error al actualizar el usuario");
  }
};
const deleteUser = async (userId) => {
  try {
    return await User.destroy({ where: { id: userId } });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw new Error("Error eliminando el usuario");
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