const database = require('../models');

class PessoaController {
    static async findAllPessoa(req, resp) {
        try {
            const listaPessoas = await database.Pessoas.findAll();
            return resp.status(200).json(listaPessoas);
        } catch (error) {
            return resp.status(500).json(error.message);
        }
    }

    static async findById(req, resp){
        const { id } = req.params;
        try{
          const pessoa = await database.Pessoas.findOne( { where: {id: Number(id) } });
          return resp.status(200).json(pessoa);
        }catch(error){
          return resp.status(500).json(error.message);
        }
    }
 
    static async save(req, resp){
        const novaPessoa = req.body;
        try{
          const pessoa = await database.Pessoas.create(novaPessoa);
          return resp.status(201).json(pessoa);
        }catch(error){
          return resp.status(500).json(error.message);
        }
    }

    static async update(req, resp){
      const { id } = req.params;
      const novaPessoa = req.body;
      try{
        await database.Pessoas.update(novaPessoa, { where: {id: Number(id)}});
        const pessoaAtualizada = await database.Pessoas.findOne({ where:{id: Number(id)}});
        return resp.status(201).json(pessoaAtualizada);
      }catch(error){
        return resp.status(500).json(error.message);
      }
  }

  static async delete(req, resp){
    const { id } = req.params;
    try{
      await database.Pessoas.destroy({ where: {id: Number(id)}});
      return resp.status(204).json({message: `ID ${id} Deletado `});
    }catch(error){
      return resp.status(500).json(error.message);
    }
}

}
module.exports = PessoaController;