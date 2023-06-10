//IMPORTAMOS EXPRESS
import express from "express";
//Importamos Morgan desde express
import morgan from "morgan";
//Importamos la ruta de login
import loginRouter from "./routes/loginRouter.js";

//importamos cors
import cors from 'cors'

const app = express();
////////////////////////Middlewares/////////////////////////////////////
//esto para que el servidor interprete los datos en formato json
app.use(morgan('dev'));
app.use(express.json());
//aqui utilizamos  cors para conectar con vue
app.use(cors());
//ruta de eventos
//Rutas login
app.use('/api', loginRouter);


//expor de app para poderlo utilizar en index
export default app;

