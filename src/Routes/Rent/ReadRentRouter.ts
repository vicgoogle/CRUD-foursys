import RentController from "@src/Controllers/RentController";
import { Router } from "express";
import ReadMiddleware from "@src/Middlewares/Rent/ReadRentMiddleware";

const ReadRouter = Router();
const rentController = new RentController();

ReadRouter.get(
  "/read/:id",
  ReadMiddleware,
  rentController.read.bind(rentController)
);

export default ReadRouter;
