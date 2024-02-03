import { matchedData } from "express-validator";
import Libro from "../db/models/Libro.js";

export const obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los libros" });
  }
};

export const obtenerLibro = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return res.status(404).json({ message: "No se encontro el libro" });
    }

    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el libro" });
  }
};

export const createLibro = async (req, res) => {
  const dataLibro = matchedData(req);

  try {
    const exitsLibro = await Libro.findOne({
      where: {
        titulo: dataLibro.titulo,
      },
    });

    if (exitsLibro) {
      return res
        .status(400)
        .json({ message: "El libro que quieres registrar ya existe" });
    }

    const newLibro = await Libro.create(dataLibro);
    res.status(201).json(newLibro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el libro" });
  }
};

export const updateLibro = async (req, res) => {
  const { id } = req.params;
  const dataLibro = matchedData(req);
  try {
    const libro = await Libro.findByPk(id);
    if (!libro)
      return res.status(404).json({ message: "No se encontro el libro" });

    await libro.update(dataLibro);
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el libro" });
  }
};

export const deleteLibro = async (req, res) => {
  const { id } = req.params;
  try {
    const libro = await Libro.findByPk(id);
    if (!libro)
      return res.status(404).json({ message: "No se encontro el libro" });

    await libro.destroy();
    res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro" });
  }
};
