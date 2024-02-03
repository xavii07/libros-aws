import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import routerLibros from "./routes/libros.js";
import db from "./db/connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7500;

(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/libros", routerLibros);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
