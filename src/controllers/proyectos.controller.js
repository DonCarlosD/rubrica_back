import { sequelize } from "../database/database.js";
import { proyecto } from "../models/proyectos.js";

// funciones
// obtener todos los proyectos
export async function allproyectos(req,res) {
    try{
        const proyectos = await proyecto.findAll();
        res.status(200).json({
            ok:true,
            proyectos
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
// crear un nuevo proyecto
export async function createProyecto(req,res){
    const t = await sequelize.transaction();
    try{
        const {nombre,asesorInt,asesorExt,identificador} = req.body;
        const proyectoExist = await proyecto.findOne({
            where:{
                identificador
            }
        });
        if(proyectoExist){
            await t.rollback();
            return res.status(400).json({
                ok:false,
                msg:'El proyecto ya existe'
            });
        }
        const newProyecto = await proyecto.create({
            nombre,
            asesorInt,
            asesorExt,
            identificador,
            integrantesPermitidos:2
        },{transaction:t});
        await t.commit();
        res.status(200).json({
            ok:true,
            msg:'Proyecto creado',
            proyecto:newProyecto
        });
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