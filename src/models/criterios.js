import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

// definir modelo criterio
export const criterio= sequelize.define(
    'criterio',
    {
        id_criterio:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        criterio:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        tableName: 'criterio',
    }
);