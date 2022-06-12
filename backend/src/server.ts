import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";
import cors from "cors";
const app = express();
const allowedOrigins = ["http://localhost:19006"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running in port ${PORT} 🚀`));
