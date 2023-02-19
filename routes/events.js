import { Router } from "express";
import { check } from "express-validator";

import {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEvento,
} from "../controllers/events.js";
import { isDate } from "../helpers/isDate.js";
import { validarCampos } from "../middlewares/validarCampos.js";
import { validarJWT } from "../middlewares/validarJWT.js";

const eventsRoutes = Router();

eventsRoutes.use(validarJWT);

// Obtener eventos
eventsRoutes.get("/", getEvento);

// Crear eventos
eventsRoutes.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    check("title", "El titulo es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearEvento
);

// Actualizar evento
eventsRoutes.put("/:id", actualizarEvento);

// Borrar evento
eventsRoutes.delete("/:id", eliminarEvento);

export { eventsRoutes };
