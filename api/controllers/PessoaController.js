const database = require('../models');

class PessoaController {

  static async findAllPessoaAndAtivoTrue(req, resp) {
    try {
      const listaPessoasAtivas = await database.Pessoas.findAll();
      return resp.status(200).json(listaPessoasAtivas);
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  static async findAllPessoa(req, resp) {
    try {
      const listaPessoas = await database.Pessoas.scope('todos').findAll();
      return resp.status(200).json(listaPessoas);
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  static async findById(req, resp) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
      return resp.status(200).json(pessoa);
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  static async save(req, resp) {
    const novaPessoa = req.body;
    try {
      const pessoa = await database.Pessoas.create(novaPessoa);
      return resp.status(201).json(pessoa);
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  static async update(req, resp) {
    const { id } = req.params;
    const novaPessoa = req.body;
    try {
      await database.Pessoas.update(novaPessoa, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });
      return resp.status(201).json(pessoaAtualizada);
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  static async delete(req, resp) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return resp.status(204).json({ message: `ID ${id} Deletado ` });
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }

  //{{host}}/pessoas/1/matricula/5
  //{{host}}/pessoas/:id/matricula/:id

  static async findPessoaAndMatricula(req, res) {
    try {
      const { estudante_id, matricula_id } = req.params;
      const umaMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matricula_id),
          estudante_id: Number(estudante_id)
        }
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json({ message: `${error}` })
    }
  }

  //{{host}}/pessoas/:estudante_id/matricula
  static async saveMatricula(req, res) {
    try {
      const { estudante_id } = req.params;
      const matriculaNova = { ...req.body, estudante_id: Number(estudante_id) }
      const umaMatricula = await database.Matriculas.create(matriculaNova);
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json({ message: `${error}` })
    }
  }

  //{{host}}/pessoas/:estudante_id/matricula/:matricula_id
  static async updateMatricula(req, res) {
    try {
      const { estudante_id, matricula_id } = req.params;
      const novasInfo = req.body;
      await database.Matriculas.update(novasInfo, {
        where: {
          id: Number(matricula_id),
          estudante_id: Number(estudante_id)
        }
      });
      const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matricula_id) } });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json({ message: `${error}` })
    }
  }

  static async deleteMatricula(req, resp) {
    const { estudante_id, matricula_id } = req.params;
    try {
      await database.Matriculas.destroy({ where: { id: Number(matricula_id), estudante_id: Number(estudante_id) } });
      return resp.status(204).json({ message: `ID ${matricula_id} Deletado ` });
    } catch (error) {
      return resp.status(500).json(error.message);
    }
  }
  static async restauraPessoa(req, res){
    try {
      const { id } = req.params;
      await database.Pessoas.restore({ where: {id: Number(id)}});
      return res.status(200).json({message: `Id ${id} Restaurado `});
    } catch (error) {
      return res.status(500).json({message: `${error}`})
    }
  }
}
module.exports = PessoaController;