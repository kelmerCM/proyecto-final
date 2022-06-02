import { UsuarioRoutes } from "./usuarioR";
import { LibroRoutes } from "./libroR";
import { EjemplarRoutes } from "./ejemplarR";
import { PrestarRoutes } from "./prestarR";

export class Routes {
   public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes()
   public libroRoutes: LibroRoutes = new LibroRoutes()
   public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes()
   public prestarRoutes: PrestarRoutes = new PrestarRoutes()
}