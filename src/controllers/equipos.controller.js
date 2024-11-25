import { sequelize } from "../database/database.js";
import { equipo } from "../models/equipos.js";
import { integrante } from "../models/integrantes.js";
import { proyecto } from "../models/proyectos.js";

// funciones
// obtener todos los equipos
export async function allEquipos(req,res){
    try{
        const equipos = await equipo.findAll({
            include:proyecto
        });
        res.status(200).json({
            ok:true,
            equipos
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error',
            error
        });
    }
}
// crear un nuevo equipo
export async function createEquipo(req,res) {
    const t = await sequelize.transaction();
    try{
        const {nombre,id_proyecto}=req.body
        // verificar si el proyecto existe
        const existeProyecto = await proyecto.findOne({
            where:{id_proyecto:id_proyecto}
        })
        // verificar si otro equipo ya tiene el proyecto
        const equipoExist = await equipo.findOne({
            where:{id_proyecto:id_proyecto}
        })
        // si no existe el proyecto
        if(!existeProyecto){
            await t.rollback();
            return res.status(400).json({
                ok:false,
                msg:'El proyecto no existe'
            })
        }
        // si ya existe un equipo con el proyecto
        if(equipoExist){
            await t.rollback();
            return res.status(400).json({
                ok:false,
                msg:'El proyecto ya tiene un equipo',
                equipo:equipoExist
            })
        }
        // crear equipo
        const newEquipo = await equipo.create({
            nombre,
            id_proyecto,
            integrantesPermitidos:2,
            cantidadIntegrantes:0
        },{transaction:t});
        await t.commit();
        res.status(200).json({
            ok:true,
            msg:'Equipo creado',
            equipo:newEquipo
        })
    }catch(error){
        await t.rollback();
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error',
            error
        });
    }
}