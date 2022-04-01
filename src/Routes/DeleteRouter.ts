import ClientController from "@src/Controllers/ClientController";
import DeleteMiddleware from "@src/Middlewares/DeleteMiddleware";
import { Router } from "express";

const DeleteRouter = Router();
const clientController = new ClientController();

DeleteRouter.delete(
  "",
  DeleteMiddleware,
  clientController.delete.bind(clientController)
);

export default DeleteRouter;
