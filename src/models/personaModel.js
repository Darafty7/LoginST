//eN EL MODELO SE HACE CAMBIOS COMO TIPO DE DATOS COMO BIGINIT Y ENUM EN EL CAMPO DE TIPO DE DOCUMENTO.

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

// import { comentarios } from "./comentariosModel.js";
export const persona = sequelize.define('persona', {
    id_persona: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo_documento: {
        type: DataTypes.ENUM(
            "Tarjeta de Identidad",
            "Cedula de Ciudadania",
            "Cedula de Extranjeria"
        ),
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,

        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    n_documento: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefono: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    n_ficha: {
        type: DataTypes.INTEGER,

        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('Aprendiz', 'Enfermera', 'Psicologa'),
    },

});
