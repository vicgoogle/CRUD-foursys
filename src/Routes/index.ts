import { Response, Router } from "express";
import AppError from "../Errors/AppError";
import ReadClientRouter from "./Client/ReadClientRouter";
import DeleteClientRouter from "./Client/DeleteClientRouter";
import CreateClientRouter from "./Client/CreateClientRouter";
import UpdateClientRouter from "./Client/UpdateClientRouter";
import ReadRentRouter from "./Rent/ReadRentRouter";
import DeleteRentRouter from "./Rent/DeleteRentRouter";
import CreateRentRouter from "./Rent/CreateRentRouter";
import UpdateRentRouter from "./Rent/UpdateRentRouter";

const routes = Router();

routes.use("/client", CreateClientRouter);
routes.use("/client", ReadClientRouter);
routes.use("/client", UpdateClientRouter);
routes.use("/client", DeleteClientRouter);
routes.use("/rent", CreateRentRouter);
routes.use("/rent", ReadRentRouter);
routes.use("/rent", UpdateRentRouter);
routes.use("/rent", DeleteRentRouter);

routes.use((error: Response) => {
  if (error) {
    throw new AppError("Rota inválida");
  }
});

export default routes;
