import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { criterio } from "./criterios.js";

// definir modelo ponderacion
export const ponderacion=sequelize.define(
    'ponderacion',
    {
        id_criterio:{
            type: DataTypes.INTEGER,
            references:{
                model: 'criterio',
                key: 'id_criterio',
            }
        },
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        puntaje:{
            type: DataTypes.INTEGER
        },
        nivel:{
            type: DataTypes.STRING(100)
        }
    },
    {
        tableName: 'ponderacion',
    }
);
// relacionar ponderacion con criterio
ponderacion.belongsTo(criterio,{
    foreignKey: 'id_criterio',
    sourceKey: 'id_criterio',
});
criterio.hasOne(ponderacion,{
    foreignKey: 'id_criterio',
    sourceKey: 'id_criterio',
});