import { validationResult } from "express-validator";

export const validationData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((error) => error.msg);
    const errorMsg = `Error en los siguientes campos: ${errorMsgs.join(", ")}`;
    return res.status(400).json({ message: errorMsg });
  }
  next();
};
