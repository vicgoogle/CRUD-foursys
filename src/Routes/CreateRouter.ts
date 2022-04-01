import ClientController from "@src/Controllers/ClientController";
import CreateMiddleware from "@src/Middlewares/CreateMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const clientController = new ClientController();

CreateRouter.post(
  "",
  CreateMiddleware,
  clientController.create.bind(clientController)
);

export default CreateRouter;
