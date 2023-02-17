import { Request, Response } from "express";
import CreateService from "@src/Services/Rent/CreateRentService";
import readService from "@src/Services/Rent/ReadRentService";
import DeleteService from "@src/Services/Rent/DeleteRentService";
import UpdateService from "@src/Services/Rent/UpdateRentService";
import { container } from "tsyringe";

export default class ClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nameEquipment } = request.body;

    const createClientService = container.resolve(CreateService);

    const createdClient = await createClientService.execute({
      nameEquipment,
    });

    return response.json({ response: createdClient });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readClientService = container.resolve(readService);

    const findClient = await readClientService.execute(id);

    return response.json({
      cliente: findClient,
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Equipamento excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, nameEquipment } = request.body;

    const updateService = container.resolve(UpdateService);

    const updatedClient = await updateService.execute({
      id,
      nameEquipment,
    });

    return response.json({ response: updatedClient });
  }
}
