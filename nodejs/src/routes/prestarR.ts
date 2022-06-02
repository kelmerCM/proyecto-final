import { PrestarController } from "../controllers/prestar.controller";
import { Application } from "express";



export class PrestarRoutes {
    public prestarController: PrestarController = new PrestarController()
    

    public Routes(app: Application) {
        app.route('/prestar').get(this.prestarController.getAllPrestar)
        app.route('/createPrestar').post(this.prestarController.createPrestar)
        app.route('/prestar/condicion1/:fechaI/:fechaF').get(this.prestarController.condicion1)
        app.route('/prestar/condicion2/:fechaI/:fechaF').get(this.prestarController.condicion2)
        app.route('/prestar/condicion3/:fechaI/:fechaF').get(this.prestarController.condicion3)
       

        
        
    }
}