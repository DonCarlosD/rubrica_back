import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { proyecto } from "./proyectos.js";

// crear modelo equipo
export const equipo=sequelize.define(
    'equipo',
    {
        id_equipo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        id_proyecto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'proyecto',
                key:'id_proyecto'
            }
        },
        integrantesPermitidos:{
            type: DataTypes.INTEGER(1),
            allowNull:false
        },
        cantidadIntegrantes:{
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'equipo',
    }
);
// relacionar equipo con proyecto
equipo.belongsTo(proyecto,{
    foreignKey: 'id_proyecto',
    sourceKey: 'id_proyecto',
});
proyecto.hasOne(equipo,{
    foreignKey: 'id_proyecto',
    sourceKey: 'id_proyecto',
});