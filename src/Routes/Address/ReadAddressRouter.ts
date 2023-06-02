import AddressController from "@src/Controllers/AddressController";
import { Router } from "express";
import ReadMiddleware from "@src/Middlewares/Address/ReadAddressMiddleware";

const ReadRouter = Router();
const addressController = new AddressController();

ReadRouter.get(
  "/read/:id",
  ReadMiddleware,
  addressController.read.bind(addressController)
);

export default ReadRouter;
