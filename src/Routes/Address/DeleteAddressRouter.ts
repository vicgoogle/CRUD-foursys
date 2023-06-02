import AddressController from "@src/Controllers/AddressController";
import { Router } from "express";

const DeleteRouter = Router();
const addressController = new AddressController();

DeleteRouter.delete(
  "/delete/:id",
  addressController.delete.bind(addressController)
);

export default DeleteRouter;
