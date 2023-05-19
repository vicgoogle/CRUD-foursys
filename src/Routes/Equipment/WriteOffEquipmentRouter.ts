import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";

const UpdateRouter = Router();
const equipmentController = new EquipmentController();

UpdateRouter.put(
  "/writeOff/:id",
  equipmentController.writeOff.bind(equipmentController)
);

export default UpdateRouter;
