const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Livros = sequelize.define("Livros", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    autor_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    titulo:{
        type: DataTypes.STRING(150),
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING(13),
        allowNull: false,
        unique: true
    },
    editora:{
        type: DataTypes.STRING(80)
    },
    paginas:{
        type: DataTypes.INTEGER
    },
    ano_publicacao:{
        type: DataTypes.INTEGER
    },
    categoria:{
        type: DataTypes.ENUM("FANTASIA", "TERROR", "FICCAO_CIENTIFICA", "ROMANCE", "TECNICO"),
        allowNull: false
    }
}, {
    tableName: "livros",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Livros;