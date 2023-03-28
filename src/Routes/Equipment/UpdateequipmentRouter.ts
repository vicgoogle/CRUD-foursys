import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/Equipment/UpdateEquipmentMiddleware";

const UpdateRouter = Router();
const equipmentController = new EquipmentController();

UpdateRouter.put(
  "/update",
  UpdateMiddleware,
  equipmentController.update.bind(equipmentController)
);

export default UpdateRouter;
