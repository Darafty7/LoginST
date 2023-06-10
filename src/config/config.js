// importar el paquete instalado
import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 4000
export const DB_PORT = process.env.DB_PORT || 5432
export const DB_USER = process.env.DB_USER || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || '0000'
export const DB_DATABASE = process.env.DB_DATABASE || 'login'
export const SECRET_KEY = process.env.SECRET_KEY || "SecretKey1234"




