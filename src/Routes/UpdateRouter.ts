import ClientController from "@src/Controllers/ClientController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/UpdateMiddleware";

const UpdateRouter = Router();
const clientController = new ClientController();

UpdateRouter.put(
  "",
  UpdateMiddleware,
  clientController.update.bind(clientController)
);

export default UpdateRouter;
