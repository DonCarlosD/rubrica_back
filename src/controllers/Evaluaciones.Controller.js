import { sequelize } from "../database/database.js";
import {evaluacion} from '../models/evaluaciones.js'

// Funciones
// obtener todas las evaluaciones
export const getAllEvaluaciones = async(req,res)=>{
    const t = await sequelize.transaction();
    try{
        const evaluacionesFound=await evaluacion.findAll({transaction:t});
        if(evaluacionesFound.length > 0){
            res.json({
                ok: true,
                evaluaciones: evaluacionesFound
            });
        }else{
            res.json({
                ok: false,
                message: "No hay evaluaciones registradas"
            });
        }
    }catch(error){
        await t.rollback();
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Error en el servidor",
            error
        })
    }
}
// crear una evaluacion
