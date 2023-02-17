import RentController from "@src/Controllers/RentController";
import CreateMiddleware from "@src/Middlewares/Rent/CreateRentMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const rentController = new RentController();

CreateRouter.post(
  "/create",
  CreateMiddleware,
  rentController.create.bind(rentController)
);

export default CreateRouter;
