import { sequelize } from "../database/database.js";
import {evaluacion} from '../models/evaluaciones.js'
import {criterio_evaluacion} from '../models/criterios_evaluacion.js'

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
export const createEvaluacion = async(req,res)=>{
    const t = await sequelize.transaction();
    try{
        const {id_usuario,id_equipo,calificacion,estado,observaciones,criterios,juez}=req.body;
        const newEvaluacion=await evaluacion.create({
            id_usuario,
            id_equipo,
            calificacion,
            estado,
            observaciones,
            juez
        },{transaction:t});
        for (const criterio of criterios){
            await criterio_evaluacion.create({
                id_evaluacion:newEvaluacion.id_evaluacion,
                id_criterio:criterio.id_criterio,
                puntaje:criterio.puntaje
            },{transaction:t});
        }
        await t.commit();
        res.json({
            ok: true,
            newEvaluacion,
            criterios
        });
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