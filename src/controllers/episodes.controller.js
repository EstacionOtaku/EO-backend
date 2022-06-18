import { seasons, episodes } from "../models";

class EpisodeController {
  constructor() {
    this.model = episodes;
  }

  async getAll(req, res) {
    try {
      const records = await this.model.findAll({
        include: seasons,
      });
      return res.status(200).json(records);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  // async createRecord(req, res) {
  //   try {
  //     const {
  //       name,
  //       is_active,
  //       anime_id,
  //     } = req.body;

  //     const record = await this.model.create({
  //       name,
  //       is_active,
  //       anime_id,
  //     });

  //     return res.status(201).json(record);
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // }

  // async getById(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const record = await this.model.findOne({
  //       include: animes,
  //       where: {
  //         id,
  //       },
  //     });

  //     return res.status(200).json(record);
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // }

//   async updateRecord(req, res) {
//     try {
//       const { id } = req.params;
//       const {
//         name,
//         is_active,
//         anime_id,
//       } = req.body;

//       await this.model.update(
//         {
//         name,
//         is_active,
//         anime_id,
//         },
//         {
//           where: {
//             id,
//           },
//         }
//       );

//       return res.status(200).json({
//         message: `Se actualizo el anime de id: ${id}`,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: error.message,
//       });
//     }
//   }

//   async deleteRecord(req, res) {
//     try {
//       const { id } = req.params;
//       await this.model.destroy({
//         where: {
//           id,
//         },
//       });
//       return res.status(200).json({
//         message: `Se eliminó el anime de id: ${id}`,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         message: error.message,
//       });
//     }
//   }
}

 module.exports = EpisodeController;