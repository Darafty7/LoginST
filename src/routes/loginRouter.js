//IMPORTACION DEL ROUTER DESDE EXPRESS
import { Router } from "express";

//IMPORTACION DEL CONTROLADOR QUE TIENE LOS METODOS DEL LOGIN Y EL REGISTRO
import {
  registroPersona,
  deletePersona,
  getIdpersona,
  getPersona,
  updatePersona,
  loginPersona,
  verificarPersonaExistente,
  logOut,
} from "../controllers/loginController.js";

const router = Router();

//Respuestas HTTP CORS
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//Peticiones tanto del login y registro.
router.get("/persona", getPersona);
router.get("/persona/:id", getIdpersona);
router.patch("/persona/:id", updatePersona);
router.delete("/persona/:id", deletePersona);

//Post del regisgtro
router.post("/persona", verificarPersonaExistente, registroPersona);
//Post del login
router.post("/login", loginPersona);
///POST DEL LOG OUT
router.post("/logout",logOut);
export default router;
