import RentController from "@src/Controllers/RentController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/Rent/UpdateRentMiddleware";

const UpdateRouter = Router();
const rentController = new RentController();

UpdateRouter.put(
  "/update",
  UpdateMiddleware,
  rentController.update.bind(rentController)
);

export default UpdateRouter;
