import { Response, Router } from "express";
import AppError from "../Errors/AppError";
import ReadRouter from "./ReadRouter";
import DeleteRouter from "./DeleteRouter";
import CreateRouter from "./CreateRouter";
import UpdateRouter from "./UpdateRouter";

const routes = Router();

routes.use("/create", CreateRouter);
routes.use("", ReadRouter);
routes.use("/update", UpdateRouter);
routes.use("", DeleteRouter);

routes.use((error: Response) => {
  if (error) {
    throw new AppError("Rota inválida");
  }
});

export default routes;
