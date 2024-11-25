import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const proyecto = sequelize.define('proyecto', {
    id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    asesorInt: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    asesorExt: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    identificador: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    integrantesPermitidos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'proyecto', // Asegúrate de que el nombre de la tabla sea correcto
    timestamps: true, // Si estás usando createdAt y updatedAt
});