const Sequelize = require('sequelize');
const Autor = connection.define(
    'medico',
    {
        nome_categoria:{
            type: Sequelize.STRING(150),
            allowNull: false
        }
    }
);

Categoria.sync({force:true});

module.exports = connection;