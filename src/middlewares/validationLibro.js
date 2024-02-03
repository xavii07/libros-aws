import { check } from "express-validator";
import { validationData } from "./validateData.js";

export const validationDataLibro = [
  check("titulo", "El titulo es obligatorio").not().isEmpty(),
  check("autor", "El autor es obligatorio").not().isEmpty(),
  check("genero", "El genero es obligatorio").not().isEmpty(),
  check("editorial", "La editorial es obligatoria").not().isEmpty(),
  check("isbn", "El isbn es obligatorio").not().isEmpty(),
  check("anioPublicacion", "El anio de publicacion es obligatorio")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("El anio de publicacion debe ser numerico"),
  check("numeroPaginas", "El numero de paginas es obligatorio")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("El numero de paginas debe ser numerico"),
  validationData,
];
