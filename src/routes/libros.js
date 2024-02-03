import { Router } from "express";
import {
  createLibro,
  deleteLibro,
  obtenerLibro,
  obtenerLibros,
  updateLibro,
} from "../controllers/libros.js";
import { validationDataLibro } from "../middlewares/validationLibro.js";

const router = Router();

router.get("/", obtenerLibros);

router.get("/:id", obtenerLibro);

router.post("/", validationDataLibro, createLibro);

router.put("/:id", validationDataLibro, updateLibro);

router.delete("/:id", deleteLibro);

export default router;
