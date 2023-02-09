const  database  = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;
class TurmaController{

    static async findAllTurma(req, resp){
        const { data_incial, data_final } = req.query;
        const where = {};
        data_incial || data_final ? where.data_inicio = {} : null;
        data_incial ? where.data_inicio[op.gte] = data_incial : null;
        data_final ? where.data_inicio[op.lte] = data_final : null;
        try{
            const listaTurmas = await database.Turmas.findAll({ where });
            return resp.status(200).json(listaTurmas);
        }catch(error){
            return resp.status(500).json({message: `${error}`})
        }
    }

    static async findById(req, res){
        try {
            const { id } = req.params;
            const turma = await database.Turmas.findOne({ where: {id: Number(id)}})
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async update(req, res){
        try {
            const { id } = req.params;
            const turma  = req.body;
            await database.Niveis.update(turma, { where: {id: Number(id)}});
            const  result = await database.Turmas.findOne({ where: {id: Number(id)}});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async save(req, res){
        try {
            const turmaNovo   = req.body;
            const  objeto  = await database.Turmas.create(turmaNovo);
            return res.status(201).json(objeto);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).json(` ID: ${id} DELETADO`);
        } catch (error) {
            return res.status(500).json({message: `${error}`});
        }
    }


}

module.exports = TurmaController;