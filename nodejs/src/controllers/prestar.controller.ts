import { Prestar, PrestarI } from "../models/prestar";
import { Request, Response } from "express";
import { Usuario } from "../models/usuario";
import { Libro } from "../models/libro";
import model from "sequelize/types/model";
import { Ejemplar } from "../models/ejemplar";
const Sequelize = require('sequelize');


export class PrestarController {
    async getAllPrestar(req: Request, res: Response) {
        let prestar: PrestarI[] = await Prestar.findAll({
            attributes: ['UsuarioId','EjemplarId','fecha_dev','fecha_pres',]
        })
        res.status(200).json({prestar})
    }

    async createPrestar(req: Request, res: Response) {
        const {
            UsuarioId,
            EjemplarId,
            fecha_dev,
            fecha_pres,
        } = req.body

        try {
            let body: PrestarI = {
                UsuarioId,
                EjemplarId,
                fecha_dev,
                fecha_pres,
            }
            await Prestar.create({...body})
            res.status(200).json({msg: 'Prestar creado correctamente...!'})
        } catch (error) {
            
        }
    }   

    async condicion1(req: Request, res: Response) {
        const {
            fechaI,
            fechaF,
        } = req.params

        try {
            let prestar: PrestarI[] = await Prestar.findAll({
                where: {
                    fecha_pres: fechaI,
                    fecha_dev: fechaF,
                    
                },
                attributes: ['fecha_dev','fecha_pres',`UsuarioId`,`EjemplarId`]
            })


            res.status(200).json({prestar})
        } catch (error) {
            
        }
    }

    async condicion2(req: Request, res: Response) {
       const {
            fechaI,
            fechaF,
        } = req.params

        try {
            let prestar: PrestarI[] = await Prestar.findAll({
                where: {
                    fecha_pres: fechaI,
                    fecha_dev: fechaF,
                    
                },
                attributes: [
                    `fecha_dev`, `fecha_pres`,
                    [Sequelize.literal('COUNT(EjemplarId)'), 'CantidadLibros']
                  ]
                
                
            })


            res.status(200).json({prestar})
        } catch (error) {
            
        }
    }    
    async condicion3(req: Request, res: Response) {
        const {
            fechaI,
            fechaF,
        } = req.params

        try {
            let prestar: PrestarI[] = await Prestar.findAll({
                where: {
                    fecha_pres: fechaI,
                    fecha_dev: fechaF,
                    
                },
                attributes: [
                    `UsuarioId`,`fecha_dev`, `fecha_pres`,
                    [Sequelize.literal('COUNT(EjemplarId)'), 'CantidadLibros'],

                    
                  ]
                
                
            })


            res.status(200).json({prestar})
        } catch (error) {
            
        }
    }
}
 