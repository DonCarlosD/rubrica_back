import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { evaluacion } from "./evaluaciones.js";
import { criterio } from "./criterios.js";

// definir modelo criterio
export const criterio_evaluacion= sequelize.define(
    'criteria_evaluacion',
    {
        id_evaluacion:{
            type: DataTypes.INTEGER,
            references:{
                model: 'evaluacion',
                key: 'id_evaluacion',
            }
        },
        id_criterio:{
            type: DataTypes.INTEGER,
            references:{
                model: 'criterio',
                key: 'id_criterio',
            }
        },
        puntaje:{
            type: DataTypes.DECIMAL(10,2),
        },
        nivel:{
            type: DataTypes.STRING(100),
        },
    },
    {
        tableName: 'criterio_evaluacion',
    }
);
// relacionar criterio con evaluacion
criterio_evaluacion.belongsTo(evaluacion,{
    foreignKey: 'id_evaluacion',
    sourceKey: 'id_evaluacion',
});
evaluacion.hasOne(criterio_evaluacion,{
    foreignKey: 'id_evaluacion',
    sourceKey: 'id_evaluacion',
});
// relacionar criterio con criterio
criterio_evaluacion.belongsTo(criterio,{
    foreignKey: 'id_criterio',
    sourceKey: 'id_criterio',
});
criterio.hasOne(criterio_evaluacion,{
    foreignKey: 'id_criterio',
    sourceKey: 'id_criterio',
});
