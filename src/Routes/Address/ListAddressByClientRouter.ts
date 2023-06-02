import AddressController from "@src/Controllers/AddressController";
import { Router } from "express";

const ListEquipmentRouter = Router();
const addressController = new AddressController();

ListEquipmentRouter.get(
  "/list/:client",
  addressController.listByClient.bind(addressController)
);

export default ListEquipmentRouter;
