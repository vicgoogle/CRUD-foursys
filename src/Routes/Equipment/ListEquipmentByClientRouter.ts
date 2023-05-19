import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";

const ListEquipmentRouter = Router();
const equipmentController = new EquipmentController();

ListEquipmentRouter.get(
  "/listByClient/:client",
  equipmentController.listByClient.bind(equipmentController)
);

export default ListEquipmentRouter;
