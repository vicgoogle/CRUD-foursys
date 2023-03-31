import RentController from "@src/Controllers/RentController";
import { Router } from "express";

const ListEquipmentRouter = Router();
const rentController = new RentController();

ListEquipmentRouter.get("/list", rentController.list.bind(rentController));

export default ListEquipmentRouter;
