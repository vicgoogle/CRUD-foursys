import RentController from "@src/Controllers/RentController";
import { Router } from "express";

const DeleteRouter = Router();
const rentController = new RentController();

DeleteRouter.delete("/delete/:id", rentController.delete.bind(rentController));

export default DeleteRouter;
