//IMPORTAMOS APP DEL ARCHIVO APP.JS
import app from './app.js';
//IMPORTAMOS LA INSTANCIA DE SEQUELIZE
import { sequelize } from './database/database.js';
//SERVIDOR BASICO QUE ESTA ESCUCHANDO EN EL PUERTO 4000
async function main() {
    try {
        //ELIMINA Y CREA TABLAS EN CASO DE REINICIAR LOS CAMPOS PONER EL CAMPO FORCE: EN TRUE
        await sequelize.sync({ force: false });
        app.listen(4000);
        console.log('server is listening on port :', 4000)

    } catch (error) {
        console.log("Unable to connect to the database: ", error);
    }
}
main();