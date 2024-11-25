import {criterio} from '../models/criterios.js';
import { sequelize } from '../database/database.js';

// Funciones 
// obtener todos los criterios
export const getAllCriterios = async(req,res)=>{
    const t = await sequelize.transaction();
    try{
        const criteriosFound = await criterio.findAll({transaction:t});
        if(criteriosFound.length > 0){
            res.json({
                ok: true,
                criterios: criteriosFound
            });
        }else{
            res.json({
                ok: false,
                message: "No hay criterios registrados"
            });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Error en el servidor",
            error
        })
    }
};
// crear un criterio
export const crearCriterio = async(req,res)=>{
    const t = await sequelize.transaction();
    try{
        const {namecriterio,descripcion}=req.body;
        const newCriterio=await criterio.create({
            criterio:namecriterio,
            descripcion
        },{transaction:t});
        await t.commit();
        res.status(201).json({
            ok: true,
            criterio: newCriterio
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