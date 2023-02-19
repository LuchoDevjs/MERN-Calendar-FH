import { Router } from "express";
import { check } from "express-validator";

import {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} from "../controllers/auth.js";
import { validarCampos } from "../middlewares/validarCampos.js";
import { validarJWT } from "../middlewares/validarJWT.js";

const authRoutes = Router();

// Ruta de autenticación
authRoutes.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().notEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres o mas").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

authRoutes.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres o mas").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

authRoutes.get("/renew", validarJWT, revalidarToken);
export { authRoutes };
