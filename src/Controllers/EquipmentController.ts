import { Request, Response } from "express";
import CreateService from "@src/Services/Equipment/CreateEquipmentService";
import readService from "@src/Services/Equipment/ReadEquipmentService";
import DeleteService from "@src/Services/Equipment/DeleteEquipmentService";
import UpdateService from "@src/Services/Equipment/UpdateEquipmentService";
import { container } from "tsyringe";

export default class EquipmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nameEquipment, typeEquipment, priceEquipment, nameClient } =
      request.body;

    const createEquipmentService = container.resolve(CreateService);

    const createdEquipment = await createEquipmentService.execute({
      nameEquipment,
      typeEquipment,
      priceEquipment,
      nameClient,
    });

    return response.json({ response: createdEquipment });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readEquipmentService = container.resolve(readService);

    const findEquipment = await readEquipmentService.execute(id);

    return response.json({
      equipamento: findEquipment,
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Equipamento excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, nameEquipment, typeEquipment, priceEquipment, nameClient } =
      request.body;

    const updateService = container.resolve(UpdateService);
    const updatedClient = await updateService.execute({
      id,
      nameEquipment,
      typeEquipment,
      priceEquipment,
      nameClient,
    });

    return response.json({ response: updatedClient });
  }
}
