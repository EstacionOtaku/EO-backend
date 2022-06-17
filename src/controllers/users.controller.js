import { paginationFields, paginationResult } from "../helpers/pagination";
import { users, roles } from "../models";

class UserController {
  constructor() {
    this.model = users;
  }

  async getAll(request, response) {
    try {
      const { page, size } = request.query;
      const { limit, offset } = paginationFields(page, size);

      const records = await this.model.findAndCountAll({
        limit,
        offset,
        attributes: {
          exclude: ["password"],
        },
        order: [["id", "ASC"]],
        include: roles,
      });
      return response.status(200).json(paginationResult(records, page, limit));
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async getById(request, response) {
    try {
      const { id } = request.params;

      const record = await this.model.findOne({
        include: roles,
        where: {
          id, // id: id
        },
      });

      return response.status(200).json(record);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  // /users/:id - Body Request
  async updateRecord(request, response) {
    try {
      const { id } = request.params;
      const { name, last_name, email, role_id } = request.body;

      await this.model.update(
        {
          name,
          last_name,
          email,
          role_id,
        },
        {
          where: {
            id,
          },
        }
      );

      return response.status(200).json({
        message: `Se actualizo el usuario con el ID: ${id}`,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async deleteRecord(request, response) {
    try {
      const { id } = request.params;
      await this.model.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json({
        message: `Se elimino el usuario con el ID: ${id}`,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = UserController;
