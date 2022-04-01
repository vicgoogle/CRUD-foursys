import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import Client from "@src/Entities/Client";

@injectable()
export default class ReadService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute(id: string): Promise<Client> {
    const findClient = await this.clientsRepository.findById(id);

    if (!findClient) {
      throw new AppError("Cliente não encontrado");
    }

    return findClient;
  }
}
