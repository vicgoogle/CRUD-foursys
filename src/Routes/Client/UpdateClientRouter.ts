import ClientController from "@src/Controllers/ClientController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/Client/UpdateClientMiddleware";

const UpdateRouter = Router();
const clientController = new ClientController();

UpdateRouter.put(
  "/update",
  UpdateMiddleware,
  clientController.update.bind(clientController)
);

export default UpdateRouter;
