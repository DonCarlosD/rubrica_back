import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";
import { usuario } from "./users.js";
import { equipo } from "./equipos.js";

// definir modelo evaluacion
export const evaluacion=sequelize.define(
    'evaluacion',
    {
        id_evaluacion:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'usuario',
                key:'id_usuario'
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

        calificacion:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        estado:{
            type: DataTypes.ENUM('pendiente','proceso','calificada'),
        },
        observaciones:{
            type: DataTypes.STRING(100),
        },
        juez:{
            type: DataTypes.STRING(100),
        }  

    },
    {
        tableName: 'evaluacion',
    }
);
// relacion con usuario
evaluacion.belongsTo(usuario,{
    foreignKey: 'id_usuario',
    sourceKey: 'id_usuario',
});
usuario.hasMany(evaluacion,{
    foreignKey: 'id_usuario',
    sourceKey: 'id_usuario',
});
// relacion con equipo
evaluacion.belongsTo(equipo,{
    foreignKey: 'id_equipo',
    sourceKey: 'id_equipo',
});
equipo.hasMany(evaluacion,{
    foreignKey: 'id_equipo',
    sourceKey: 'id_equipo',
});