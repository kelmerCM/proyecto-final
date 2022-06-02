import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Ejemplar } from "./ejemplar";
import { Usuario } from "./usuario";

export class Prestar extends Model {
    public UsuarioId!: number;
    public EjemplarId!: number;
    public fecha_dev!: string;
    public fecha_pres!: string;
}

export interface PrestarI {
    UsuarioId: number;
    EjemplarId: number;
    fecha_dev: string;
    fecha_pres: string;
}

Prestar.init(
    {
        fecha_dev: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_pres: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        tableName: 'prestar',
        sequelize: database,
        timestamps: false
    }
)

Usuario.belongsToMany(Ejemplar, {through: 'Prestar'})
Ejemplar.belongsToMany(Usuario, {through: 'Prestar'})