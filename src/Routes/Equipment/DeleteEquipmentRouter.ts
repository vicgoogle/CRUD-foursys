import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";

const DeleteRouter = Router();
const equipmentController = new EquipmentController();

DeleteRouter.delete(
  "/delete/:id",
  equipmentController.delete.bind(equipmentController)
);

export default DeleteRouter;
