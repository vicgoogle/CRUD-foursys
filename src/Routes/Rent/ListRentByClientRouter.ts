import RentController from "@src/Controllers/RentController";
import { Router } from "express";

const ListEquipmentRouter = Router();
const rentController = new RentController();

ListEquipmentRouter.get(
  "/listByClient/:client",
  rentController.listByClient.bind(rentController)
);

export default ListEquipmentRouter;
