import ClientController from "@src/Controllers/ClientController";
import CreateMiddleware from "@src/Middlewares/Client/CreateClientMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const clientController = new ClientController();

CreateRouter.post(
  "/create",
  CreateMiddleware,
  clientController.create.bind(clientController)
);

export default CreateRouter;
