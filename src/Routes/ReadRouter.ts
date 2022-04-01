import ClientController from "@src/Controllers/ClientController";
import { Router } from "express";
import ReadMiddleware from "@src/Middlewares/ReadMiddleware";

const ReadRouter = Router();
const clientController = new ClientController();

ReadRouter.get(
  "/read/:id",
  ReadMiddleware,
  clientController.read.bind(clientController)
);

export default ReadRouter;
