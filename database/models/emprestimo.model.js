const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../connection");

const Emprestimos = sequelize.define("Emprestimos", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    leitor_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    livro_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_emprestimo:{
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    data_devolucao:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    data_prevista:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    tableName: "emprestimos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = Emprestimos;