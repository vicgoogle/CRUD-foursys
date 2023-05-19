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
      nameEquipment: Joi.string().required(),
      typeEquipment: Joi.string().required(),
      priceEquipment: Joi.number().required(),
      description: Joi.string().required(),
      client: Joi.string().required(),
      photo: Joi.string().required(),
    },
  });

  creationRequest(request, response, (err: Express.Response) => {
    if (err) {
      next(new AppError("Dados inválidos"));
    }

    next();
  });
}
