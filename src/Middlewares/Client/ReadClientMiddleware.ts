import { NextFunction, Request, Response } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AppError from "@src/Errors/AppError";

export default function ReadMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const readRequest = celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  });

  readRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
