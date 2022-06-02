import { Usuario } from "../models/usuario";
import { UsuarioI } from "../models/usuario";
import { Request, Response } from "express";


export class UsuarioController {

    async getAllUsuarios(req: Request, res: Response) {
        try {
            let usuarios: UsuarioI [] = await Usuario.findAll()
            res.status(200).json({usuarios})
        } catch (error) {
            
        }
    }

    async createUser(req: Request, res: Response) {

        const { nombre, apellidos, direccion, telefono } = req.body;
        try {
            let body: UsuarioI = {
                nombre,
                apellidos,
                direccion,
                telefono
            }
            await Usuario.create({ ...body })
            res.status(200).json({msg: 'Usuario creado correctamente..!!'})
        } catch (error) {
            
        }
    }
}