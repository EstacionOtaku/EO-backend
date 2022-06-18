import { users, roles } from "../models";

class RoleController {
  constructor() {
    this.model = roles;
  }

  async getAll(request, response) {
    try {
      const records = await this.model.findAll({
        include: users,
      });
      return response.status(200).json(records);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async createRecord(request, response) {
    try {
      const { name } = request.body;

      const record = await this.model.create({
        name,
      });

      return response.status(201).json(record);
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
        where: {
          id,
        },
      });

      return response.status(200).json(record);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }

  async updateRecord(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;

      await this.model.update(
        {
          name,
        },
        {
          where: {
            id,
          },
        }
      );

      return response.status(200).json({
        message: `Se actualizo el rol con el ID: ${id}`,
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
        message: `Se elimino el rol con el ID: ${id}`,
      });
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = RoleController;
