import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";


export class Libro extends Model {
    public titulo!: string;
    public numeropagina!: string;
    public editorial!: string;
    public isbn!: string;
    public autor!: string;
}


export interface LibroI {
    titulo: string;
    numeropagina: string;
    editorial: string;
    isbn: string;
    autor: string;
}

Libro.init(
    {
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeropagina:{
            type: DataTypes.STRING,
            allowNull: false
        },
        editorial:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn:{
            type: DataTypes.STRING,
            allowNull: false
        },
        autor:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'libro',
        sequelize: database,
        timestamps: false
    }
)