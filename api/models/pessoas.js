'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pessoas.hasMany(models.Turmas, { foreignKey: 'docente_id' });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado' },
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 50],
        msg: 'Campo nome deve conter no minimo de 3 a 50 caracters'
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dados do email invalidos '
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    }, escopes: {
      todos: { where: {} },
      //etc ... constraint que quiser passar
    },
    modelName: 'Pessoas',
  });
  return Pessoas;
};