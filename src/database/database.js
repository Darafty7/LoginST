import { Sequelize } from "sequelize";
import { DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '../config/config.js';
export const sequelize = new Sequelize(
    DB_DATABASE,//nombre de la base de datos
    DB_USER,//usuario
    DB_PASSWORD,//contraseña de la base de datos
    {
        host: 'localhost',
        dialect: 'postgres',
        port: DB_PORT ,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },

    })

// importar el paquete de CreatePoool de mysql2
// import { createPool } from "mysql2/promise"
// import {DB_PORT,
//     DB_USER,
//     DB_PASSWORD,
//     DB_DATABASE} from './config.js'

// //crear y exportar la constante pool con
// // los parametros de la DB
// export const pool = createPool({
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port:DB_PORT,
//     database:DB_DATABASE
// })