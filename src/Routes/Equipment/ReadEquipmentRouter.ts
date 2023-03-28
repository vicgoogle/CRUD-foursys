import EquipmentController from "@src/Controllers/EquipmentController";
import { Router } from "express";
import ReadMiddleware from "@src/Middlewares/Equipment/ReadEquipmentMiddleware";

const ReadRouter = Router();
const equipmentController = new EquipmentController();

ReadRouter.get(
  "/read/:id",
  ReadMiddleware,
  equipmentController.read.bind(equipmentController)
);

export default ReadRouter;
