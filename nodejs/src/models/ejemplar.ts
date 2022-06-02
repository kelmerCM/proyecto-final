import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Libro } from "./libro";



export class Ejemplar extends Model {
    public LibroId!: number;
    public localizacion!: string;
}

export interface EjemplarI {
    LibroId: number;
    localizacion: string;
}

Ejemplar.init(
    {
        localizacion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'ejemplar',
        sequelize: database,
        timestamps: false
    }
)

Libro.hasMany(Ejemplar)
Ejemplar.belongsTo(Libro)