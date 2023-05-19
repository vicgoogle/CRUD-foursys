import { Response, Router } from "express";
import AppError from "../Errors/AppError";
import ReadClientRouter from "./Client/ReadClientRouter";
import DeleteClientRouter from "./Client/DeleteClientRouter";
import CreateClientRouter from "./Client/CreateClientRouter";
import UpdateClientRouter from "./Client/UpdateClientRouter";
import LoginClientRouter from "./Client/LoginClientRouter";
import ReadRentRouter from "./Rent/ReadRentRouter";
import DeleteRentRouter from "./Rent/DeleteRentRouter";
import CreateRentRouter from "./Rent/CreateRentRouter";
import UpdateRentRouter from "./Rent/UpdateRentRouter";
import ListRentRouter from "./Rent/ListRentRouter";
import ListRentByClientRouter from "./Rent/ListRentByClientRouter";
import ReadEquipmentRouter from "./Equipment/ReadEquipmentRouter";
import DeleteEquipmentRouter from "./Equipment/DeleteEquipmentRouter";
import CreateEquipmentRouter from "./Equipment/CreateEquipmentRouter";
import UpdateequipmentRouter from "./Equipment/UpdateequipmentRouter";
import WriteOffEquipmentRouter from "./Equipment/WriteOffEquipmentRouter";
import ListEquipmentRouter from "./Equipment/ListEquipmentRouter";
import ListEquipmentByClientRouter from "./Equipment/ListEquipmentByClientRouter";

const routes = Router();

routes.use("/client", CreateClientRouter);
routes.use("/client", ReadClientRouter);
routes.use("/client", UpdateClientRouter);
routes.use("/client", DeleteClientRouter);
routes.use("/client", LoginClientRouter);
routes.use("/rent", CreateRentRouter);
routes.use("/rent", ReadRentRouter);
routes.use("/rent", UpdateRentRouter);
routes.use("/rent", DeleteRentRouter);
routes.use("/rent", ListRentRouter);
routes.use("/rent", ListRentByClientRouter);
routes.use("/equipment", DeleteEquipmentRouter);
routes.use("/equipment", CreateEquipmentRouter);
routes.use("/equipment", ReadEquipmentRouter);
routes.use("/equipment", ListEquipmentRouter);
routes.use("/equipment", ListEquipmentByClientRouter);
routes.use("/equipment", UpdateequipmentRouter);
routes.use("/equipment", WriteOffEquipmentRouter);

routes.use((error: Response) => {
  if (error) {
    throw new AppError("Rota inválida");
  }
});

export default routes;
