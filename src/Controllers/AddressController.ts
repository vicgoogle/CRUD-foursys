import { Request, Response } from "express";
import CreateService from "@src/Services/Address/CreateAddressService";
import readService from "@src/Services/Address/ReadAddressService";
import DeleteService from "@src/Services/Address/DeleteAddressService";
import UpdateService from "@src/Services/Address/UpdateAddressService";
import ListService from "@src/Services/Address/ListAddressesService";
import { container } from "tsyringe";
import ListAddressByClientService from "@src/Services/Address/ListAddressByClientService";

export default class ClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { zipCode, number, complement, client } = request.body;

    const createAddressService = container.resolve(CreateService);

    const createdClient = await createAddressService.execute({
      zipCode,
      number,
      complement,
      client,
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

  public async listByClient(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { client } = request.params;

    const listRentByClientService = container.resolve(
      ListAddressByClientService
    );

    const list = await listRentByClientService.execute(client);

    console.log(list);

    return response.json(list);
  }

  public async list(_request: Request, response: Response): Promise<Response> {
    const listAddressesService = container.resolve(ListService);

    const list = await listAddressesService.execute();

    return response.json(list);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Cliente excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, zipCode, number, complement } = request.body;

    const updateService = container.resolve(UpdateService);

    const updatedClient = await updateService.execute({
      id,
      zipCode,
      number,
      complement,
    });

    return response.json({ response: updatedClient });
  }
}
