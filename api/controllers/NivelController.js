const database  = require('../models');

class NivelController {

    static async findAllNivel(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll();
        return res.status(200).json(todosOsNiveis);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async findById(req, res){
        try {
            const { id } = req.params;
            const nivel  = await database.Niveis.findOne({ where: {id: Number(id)}})
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const  nivel   = req.body;
            await database.Niveis.update(nivel, { where: {id: Number(id)}});
            const result = await database.Niveis.findOne({ where: {id: Number(id)}});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async save(req, res){
        try {
            const novoNivel   = req.body;
            const objeto  = await database.Niveis.create(novoNivel);
            return res.status(201).json(objeto);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).json(` ID: ${id} DELETADO`);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }
}

module.exports = NivelController;