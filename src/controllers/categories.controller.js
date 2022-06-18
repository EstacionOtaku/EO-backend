import { animes, categories, seasons } from "../models";

class CategoryController {
  constructor() {
    this.model = categories;
  }

  async getAll(req, res) {
    try {
      const records = await this.model.findAll({
        include: animes, 
      });
      return res.status(200).json(records);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async createRecord(req, res) {
    try {
      const { name, image, description, is_active } = req.body;

      const record = await this.model.create({
        name,
        image,
        description,
        is_active,
      });

      return res.status(201).json(record);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const record = await this.model.findOne({
        include: animes,
        where: {
          id,
        },
      });

      return res.status(200).json(record);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async updateRecord(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        image,
        description,
        is_active,
      } = req.body;

      await this.model.update(
        {
            name,
            image,
            description,
            is_active,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json({
        message: `Se actualizo la categoria de id: ${id}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await this.model.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json({
        message: `Se eliminó la categoria de id: ${id}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = CategoryController;