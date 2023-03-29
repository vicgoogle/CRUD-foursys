import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";

const ListEquipmentRouter = Router();
const equipmentController = new EquipmentController();

ListEquipmentRouter.get(
  "/list",
  equipmentController.list.bind(equipmentController)
);

export default ListEquipmentRouter;
