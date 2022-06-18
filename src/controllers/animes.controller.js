import { animes, categories, seasons } from "../models";

class AnimeController {
  constructor() {
    this.model = animes;
  }

  async getAll(req, res) {
    try {
      const records = await this.model.findAll({
        // include: categories,
        include: seasons,
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
      const {
        name,
        front_image,
        description,
        sample_image,
        is_active,
        category_id,
      } = req.body;

      const record = await this.model.create({
        name,
        front_image,
        description,
        sample_image,
        is_active,
        category_id,
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
        include: seasons,
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
        front_image,
        description,
        sample_image,
        is_active,
        category_id,
      } = req.body;

      await this.model.update(
        {
          name,
          front_image,
          description,
          sample_image,
          is_active,
          category_id,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json({
        message: `Se actualizo el anime de id: ${id}`,
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
        message: `Se eliminó el anime de id: ${id}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = AnimeController;
