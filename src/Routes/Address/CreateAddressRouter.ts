import AddressController from "@src/Controllers/AddressController";
import CreateMiddleware from "@src/Middlewares/Address/CreateAddressMiddleware";
import { Router } from "express";

const CreateRouter = Router();
const addressController = new AddressController();

CreateRouter.post(
  "/create",
  CreateMiddleware,
  addressController.create.bind(addressController)
);

export default CreateRouter;
