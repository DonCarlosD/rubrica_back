import { sequelize } from "../database/database.js";
import {persona} from '../models/personas.js';
import {usuario} from '../models/users.js';
import bcrypt from 'bcrypt';

// funciones 
// obtener todos los usuarios
export async function allUsuarios(req,res){
    try{
        const usuarios = await usuario.findAll({
            include:persona
        });
        res.status(200).json({
            ok:true,
            usuarios
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error',
            error:e
        });
    }
};
// crear un nuevo usuario
export async function createUsuario(req, res){
    const t = await sequelize.transaction();
    try{
        const {user,rol,password,nombre,apellido_p,apellido_m} = req.body;
        // encriptar contraseña
        const newPassword = await bcrypt.hash(password,10);
        // crear persona
        const newPersona = await persona.create({
            nombre,
            apellido_p,
            apellido_m
        },{transaction:t});
        // crear usuario
        const newUser = await usuario.create({
            id_persona:newPersona.id_persona,
            usuario:user,
            rol,
            password:newPassword
        },{transaction:t});
        await t.commit();
        res.status(200).json({
            ok:true,
            msg:'Usuario creado',
            usuario:newUser,
            persona:newPersona
        });
    }catch(e){
        await  t.rollback();
        console.log(e);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error',
            error:e
        })
    }
};
// obtener un usuario por id
export async function getUsuario(req, res){
    res.status(200).json({
        ok:true,
        msg:'getUsuario'
    });
};
// actualizar un usuario por id
export async function updateUsuario(req, res){
    res.status(200).json({
        ok:true,
        msg:'updateUsuario'
    });
};
// eliminar un usuario por id
export async function deleteUsuario(req, res){
    res.status(200).json({
        ok:true,
        msg:'deleteUsuario'
    });
};
