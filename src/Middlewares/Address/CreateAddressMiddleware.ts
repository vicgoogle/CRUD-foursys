import { NextFunction, Request, Response } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AppError from "@src/Errors/AppError";

export default function CreateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const creationRequest = celebrate({
    [Segments.BODY]: {
      zipCode: Joi.string().required(),
      number: Joi.string().required(),
      complement: Joi.string().required(),
      client: Joi.string().required(),
    },
  });

  creationRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
