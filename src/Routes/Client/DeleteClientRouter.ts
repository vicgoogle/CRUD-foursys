import ClientController from "@src/Controllers/ClientController";
import { Router } from "express";

const DeleteRouter = Router();
const clientController = new ClientController();

DeleteRouter.delete(
  "/delete/:id",
  clientController.delete.bind(clientController)
);

export default DeleteRouter;
