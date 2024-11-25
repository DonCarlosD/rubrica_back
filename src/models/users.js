import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { persona } from "./personas.js";

// crear modelo usuario
export const usuario=sequelize.define(
    'usuario',
    {
        id_usuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_persona:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'persona',
                key:'id_persona'
            }
        },
        usuario:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        rol:{
            type: DataTypes.ENUM('admin','user'),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: 'usuario',
    }
);
// relacionar usuario con persona
usuario.belongsTo(persona,{
        foreignKey: 'id_persona',
        sourceKey: 'id_persona',
});
persona.hasOne(usuario,{
        foreignKey: 'id_persona',
        sourceKey: 'id_persona',
});