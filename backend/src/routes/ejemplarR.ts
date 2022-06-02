import { EjemplarController } from "../controllers/ejemplar.controller";
import { Application } from "express";


export class EjemplarRoutes {
    public ejemplarController: EjemplarController = new EjemplarController()
    
    public Routes(app: Application) {
        app.route('/ejemplares').get(this.ejemplarController.getAllEjemplar),
        app.route('/createEjemplar').post(this.ejemplarController.createEjemplar)
    }
}