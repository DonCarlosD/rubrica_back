import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// definir modelo persona
export const persona = sequelize.define(
    'persona',
    {
        id_persona:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        apellido_p:{
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        apellido_m:{
            type: DataTypes.STRING(70),
            allowNull: false,
        },
    },
    {
        tableName: 'persona',
    }
    
);