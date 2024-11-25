import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { persona } from "./personas.js";
import { equipo } from "./equipos.js";

// crear modelo integrantes
export const integrante= sequelize.define(
    'integrante',
    {
        no_control:{
            type: DataTypes.STRING(8),
            primaryKey: true,
            
        },
        id_persona:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'persona',
                key:'id_persona'
            }
        },
        id_equipo:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'equipo',
                key:'id_equipo'
            }
        },
        materia:{
            type: DataTypes.STRING(70),
            allowNull: false,
        }
    },
    {
        tableName: 'integrante',
    }
);
// relacionar integrante con persona
integrante.belongsTo(persona,{
    foreignKey: 'id_persona',
    sourceKey: 'id_persona',
});
persona.hasOne(integrante,{
    foreignKey: 'id_persona',
    sourceKey: 'id_persona',
});
// relacionar integrante con equipo
integrante.belongsTo(equipo,{
    foreignKey: 'id_equipo',
    sourceKey: 'id_equipo',
});
equipo.hasOne(integrante,{
    foreignKey: 'id_equipo',
    sourceKey: 'id_equipo',
});