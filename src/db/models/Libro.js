import { DataTypes, Model } from "sequelize";
import db from "../connection.js";

class Libro extends Model {}

Libro.init(
  {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    genero: DataTypes.STRING,
    editorial: DataTypes.STRING,
    isbn: DataTypes.STRING,
    anioPublicacion: DataTypes.INTEGER,
    numeroPaginas: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "libros",
  }
);

export default Libro;
