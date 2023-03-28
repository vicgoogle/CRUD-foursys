import EquipmentController from "@src/Controllers/EquipmentController";
import CreateMiddleware from "@src/Middlewares/Equipment/CreateEquipmentMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const equipmentController = new EquipmentController();

CreateRouter.post(
  "/create",
  CreateMiddleware,
  equipmentController.create.bind(equipmentController)
);

export default CreateRouter;
