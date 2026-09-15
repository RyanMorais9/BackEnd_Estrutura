const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Leitores = sequelize.define("Leitores", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(255),
        allowNull: false,
        unique:true
    },
    telefone:{
        type: DataTypes.STRING(20)
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: "leitores",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = Leitores;