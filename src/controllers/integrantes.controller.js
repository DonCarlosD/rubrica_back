import { sequelize } from "../database/database.js";
import { DataTypes } from 'sequelize';
import {persona} from '../models/personas.js';
import {equipo} from '../models/equipos.js';
import {integrante} from '../models/integrantes.js';

// funciones
// obtener todos los integrantes
export async function allIntegrantes(req,res){
    try{
        const integrantes = await integrante.findAll({
            include:[
                {
                    model:persona,
                    required:true
                }
            ]
        })
        if(!integrante){
            return res.status(404).json({
                ok:false,
                msg:'No hay integrantes registrados'
            });
        }
        res.status(200).json({
            ok:true,
            integrantes
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hubo  un error en la petición'
        });
    }
};
// crear un nuevo integrante
export async function createIntegrante(req, res){
    res.status(200).json({
        ok:true,
        msg:'createIntegrante'
    });
};
// obtener un integrantes por id 
export async function getIntegrante(req, res){
    res.status(200).json({
        ok:true,
        msg:'getIntegrantes'
    });
};
// actualizar un integrante por id de equipo
export async function updateIntegrante(req, res){
    res.status(200).json({
        ok:true,
        msg:'updateIntegrante'
    });
};
// eliminar un integrante por id 
export async function deleteIntegrante(req, res){
    res.status(200).json({
        ok:true,
        msg:'deleteIntegrante'
    });
};
// obtener todos los integrantes de un equipo   
export async function getIntegrantesByEquipo(req, res){
    res.status(200).json({
        ok:true,
        msg:'getIntegrantesByEquipo'
    });
};
