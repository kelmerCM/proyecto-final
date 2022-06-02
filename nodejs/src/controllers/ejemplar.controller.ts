import { Ejemplar, EjemplarI } from "../models/ejemplar";
import { Request, Response } from "express";
import { Libro } from "../models/libro";



export class EjemplarController {
    async getAllEjemplar(req: Request, res: Response) {
        const ejemplar: EjemplarI[] = await Ejemplar.findAll(
            {
                attributes: ['id','localizacion'],
                include: {
                    model: Libro,
                    attributes: ['titulo']
                }
            }
        )
        res.status(200).json({ejemplar})
    }

    async createEjemplar(req: Request, res: Response) {
        const {
            LibroId,
            localizacion
        } = req.body
        try {
            let body: EjemplarI = {
                LibroId,
                localizacion
            }

            await Ejemplar.create({ ...body })
            res.status(200).json({msg: 'Ejemplar creado correctamente'})
        } catch (error) {
            
        }
    }
}