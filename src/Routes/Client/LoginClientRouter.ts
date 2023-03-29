import ClientController from "@src/Controllers/ClientController";
import LoginMiddleware from "@src/Middlewares/Client/ClientLoginMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const clientController = new ClientController();

CreateRouter.post(
  "/login",
  LoginMiddleware,
  clientController.login.bind(clientController)
);

export default CreateRouter;
