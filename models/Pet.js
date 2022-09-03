const Sequelize = require('sequelize');
const db = require('../database/db');

 const Pet = db.define('animais',{
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
  tipo:{
    type: Sequelize.STRING,
    allowNull: false

  },
  raça:{
    type: Sequelize.STRING(1),
    allowNull: true
  },
  peso:{
    type: Sequelize.STRING,
    allowNull: false
  },
  
})

//Criar a tabela com sequelize
// Pet.sync();

// Excluir a tabela e criar novamente
//Pet.sync({force: true})

// verificar se há alguma diferença na tabel, raliza alteração
//Pet.sync({alter:true});

module.exports = Pet;