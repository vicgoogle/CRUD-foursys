import { NextFunction, Request, Response } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AppError from "@src/Errors/AppError";

export default function UpdateMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const updateRequest = celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
      zipCode: Joi.string().required(),
      number: Joi.string().required(),
      complement: Joi.string().required(),
    },
  });

  updateRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
