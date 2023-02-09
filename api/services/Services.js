const database = require('../models');

class Services{
  
   constructor(nomeModelo){
       this.nomeModelo = nomeModelo;
   }

   async pegaTodosRegistros(where = {}){
     return database[this.nomeModelo].findAll({where: {...where}});
   }

   async pegaUmRegistro(where = {}){
     return database[this.nomeModelo].findOne({where: {...where}});
   }

   async criaRegistro(dados){
     return database[this.nomeModelo].create(dados);
   }

   async atualizaRegistro(dadosAtualizado, id, transacao = {}){
      return database[this.nomeModelo].update(dadosAtualizado, {where : {id: id}}, transacao)
   }

   async atualizaRegistro(dadosAtualizado, where, transacao = {}){
    return database[this.nomeModelo].update(dadosAtualizado, {where : { ...where }}, transacao)
 }

   async apagaRegistro(id){
    return database[this.nomeModelo].destroy({where:{id: id}});
   }

   async restauraRegistro(id) {
      return database[this.nomeDoModelo].restore({ where: { id: id } })
    }
  
    async consultaRegistroApagado(id) {
      return database[this.nomeDoModelo]
        .findOne({ paranoid: false, where: { id: Number(id) } })
    }
  
    async encontraEContaRegistros(where = {}, agregadores) {
      return database[this.nomeDoModelo]
        .findAndCountAll({ where: { ...where }, ...agregadores })
    }

}

module.exports = Services;

