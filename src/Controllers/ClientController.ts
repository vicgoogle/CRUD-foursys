import { Request, Response } from "express";
import CreateService from "@src/Services/CreateService";
import readService from "@src/Services/ReadService";
import DeleteService from "@src/Services/DeleteService";
import UpdateService from "@src/Services/UpdateService";
import { container } from "tsyringe";

export default class ClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, email } = request.body;

    const createClientService = container.resolve(CreateService);

    const createdClient = await createClientService.execute({
      name,
      phone,
      email,
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
    const { id } = request.body;

    const deleteService = container.resolve(DeleteService);

    await deleteService.execute(id);

    return response.json({ response: "Cliente excluido" });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, name, phone, email } = request.body;

    const updateService = container.resolve(UpdateService);

    const updatedClient = await updateService.execute({
      id,
      name,
      phone,
      email,
    });

    return response.json({ response: updatedClient });
  }
}
