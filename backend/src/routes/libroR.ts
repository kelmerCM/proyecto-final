import { LibroController } from "../controllers/libro.controller";
import { Application } from "express";



export class LibroRoutes {
    public libroController: LibroController = new LibroController()
    

    public Routes(app: Application) {
        app.route('/libros').get(this.libroController.getAllLibros)
        app.route('/createLibro').post(this.libroController.createLibro)
    }
}