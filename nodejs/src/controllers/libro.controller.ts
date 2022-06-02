import { Libro } from "../models/libro";
import { LibroI } from "../models/libro";
import { Request, Response } from "express";


export class LibroController {
    async getAllLibros(req: Request, res: Response) {
        let libros: LibroI[] = await Libro.findAll()
        res.status(200).json({libros})
    }

    async createLibro(req: Request, res: Response) {
       
        const { 
            titulo,
            numeropagina,
            editorial,
            isbn,
            autor,
        } = req.body

        try {
            let body: LibroI = {
                titulo,
                numeropagina,
                editorial,
                isbn,
                autor,
            }
            await Libro.create({ ...body })
            res.status(200).json({msg: 'Libro creado correctamente...!'})
        } catch (error) {
            
        }
    }
}