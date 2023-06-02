import AddressController from "@src/Controllers/AddressController";
import { Router } from "express";
import UpdateMiddleware from "@src/Middlewares/Address/UpdateAddressMiddleware";

const UpdateRouter = Router();
const addressController = new AddressController();

UpdateRouter.put(
  "/update",
  UpdateMiddleware,
  addressController.update.bind(addressController)
);

export default UpdateRouter;
