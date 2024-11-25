import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';
import {personas} from '../models/personas.js';

// funciones para el controlador
// obtener todas las personas
export async function allPersonas(req,res){
    res.status(200).json({
        ok:true,
        msg:'allPersonas'
    });
};

// crear una nueva persona
export async function createPersona (req, res){
    res.status(200).json({
        ok:true,
        msg:'createPersona'
    });
};
// obtener una persona por id
export async function getPersona(req, res){
    res.status(200).json({
        ok:true,
        msg:'getPersona'
    });
};
// actualizar una persona por id
export async function updatePersona(req, res){
    res.status(200).json({
        ok:true,
        msg:'updatePersona'
    });
};
// eliminar una persona por id
export async function deletePersona(req, res){
    res.status(200).json({
        ok:true,
        msg:'deletePersona'
    });
};