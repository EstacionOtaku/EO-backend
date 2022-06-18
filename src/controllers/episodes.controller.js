import { episodes, seasons } from "../models";

class EpisodeController {
  constructor() {
    this.model = episodes;
  }

  async getAll(req, res) {
    try {
      const records = await this.model.findAll(
        { include: seasons, }
      );
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
        episode_number,
        duration,
        image,
        url,
        season_id,
      } = req.body;

      const record = await this.model.create({
        name,
        episode_number,
        duration,
        image,
        url,
        season_id,
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
        episode_number,
        duration,
        image,
        url,
        season_id,
      } = req.body;

      await this.model.update(
        {
          name,
          episode_number,
          duration,
          image,
          url,
          season_id,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json({
        message: `Se actualizo el episodio de id: ${id}`,
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
        message: `Se eliminó el episodio de id: ${id}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

 module.exports = EpisodeController;