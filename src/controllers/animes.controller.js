import { animes, categories } from "../models";

class AnimeController {
    constructor() {
        this.model = animes;
    }

    async getAll(request, response) {
        try{
            const records = await this.model.findAll({
                include: categories,
            });
            return response.status(200).json(records);
        } catch (error){
            return response.status(500).json({
                message: error.message,
            });
        }
    }
} 

module.exports = AnimeController;