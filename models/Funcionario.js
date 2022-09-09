const Sequelize = require('sequelize');
const db = require('../database/db');

const Func = db.define('funcionarios',{
  id: {
    type: Sequelize.INTEGER,  
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome:{
    type: Sequelize.STRING(50),
    allowNull: false

  },
  email:{
    type: Sequelize.STRING,
    allowNull: false

  },
  idade:{
    type: Sequelize.STRING(1),
    allowNull: true
  },
  sexo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  cpf:{
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone:{
    type: Sequelize.STRING,
    allowNull: false
  }

  
})

//Criar a tabela com sequelize
//Func.sync();

// Excluir a tabela e criar novamente
//Func.sync({force: true})

// verificar se há alguma diferença na tabel, raliza alteração
//Func.sync({alter:true});


module.exports = Func;