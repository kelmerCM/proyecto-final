import { UsuarioController } from "../controllers/usuario.controller";
import { Application } from "express";


export class UsuarioRoutes {
    public usuarioController: UsuarioController = new UsuarioController();

    public Routes(app: Application) {
       app.route('/usuarios').get(this.usuarioController.getAllUsuarios)
       app.route('/createUsuario').post(this.usuarioController.createUser)
    }
}