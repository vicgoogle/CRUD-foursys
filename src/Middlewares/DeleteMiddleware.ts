import { NextFunction, Request, Response } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AppError from "@src/Errors/AppError";

export default function DeleteClientMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const deleteRequest = celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  });

  deleteRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
