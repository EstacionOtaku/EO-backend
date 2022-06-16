// CRUD
import { usersModel } from "../models/users.js";

const getAll = async (req, res) => {
  try {
    return res.send("Listado de usuarios");
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

export { getAll };
