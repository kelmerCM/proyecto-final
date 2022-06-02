import express, { Application } from 'express'
import morgan from 'morgan'
import { Routes } from '../routes/index';
var cors = require('cors')

export class App {
    app: Application
    public routerPriv: Routes = new Routes();
    constructor(
        private port?: number | string
    ) {
        this.app = express()
        this.settings();
        this.middlewares();
        this.routes();
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log('Server on port', this.app.get('port'));
    }
    settings() {
        this.app.set('port',this.port || 3000)
    }
    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors())
    }
    routes() {
        this.routerPriv.usuarioRoutes.Routes(this.app)
        this.routerPriv.libroRoutes.Routes(this.app)
        this.routerPriv.ejemplarRoutes.Routes(this.app)
        this.routerPriv.prestarRoutes.Routes(this.app)
    }
}