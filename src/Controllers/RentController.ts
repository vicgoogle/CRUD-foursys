import { Request, Response } from "express";
import CreateService from "@src/Services/Rent/CreateRentService";
import readService from "@src/Services/Rent/ReadRentService";
import DeleteService from "@src/Services/Rent/DeleteRentService";
import UpdateService from "@src/Services/Rent/UpdateRentService";
import { container } from "tsyringe";
import ListService from "@src/Services/Rent/ListRentService";

export default class RentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nameEquipment, rentTime } = request.body;

    const createRentService = container.resolve(CreateService);

    const createdRent = await createRentService.execute({
      nameEquipment,
      rentTime,
    });

    return response.json({ response: createdRent });
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const readRentService = container.resolve(readService);

    const findRent = await readRentService.execute(id);

    return response.json({
      cliente: findRent,
    });
  }

  public async list(_request: Request, response: Response): Promise<Response> {
    const ListRentService = container.resolve(ListService);

    const list = await ListRentService.execute();

    return response.json(list);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Aluguel excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, nameEquipment, rentTime } = request.body;

    const updateService = container.resolve(UpdateService);
    const updatedRent = await updateService.execute({
      id,
      nameEquipment,
      rentTime,
    });

    return response.json({ response: updatedRent });
  }
}
