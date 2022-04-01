import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import Client from "@src/Entities/Client";

interface IRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({ id, name, phone, email }: IRequest): Promise<Client> {
    const findClient = await this.clientsRepository.findById(id);

    const verifyClientEmail = await this.clientsRepository.findByEmail(email);

    if (!findClient || !findClient.id) {
      throw new AppError("Cliente não encontrado");
    }

    if (verifyClientEmail) {
      throw new AppError("Email já encontrado");
    }

    findClient.name = name;
    findClient.phone = phone;
    findClient.email = email;

    const newClient = await this.clientsRepository.save(findClient);

    return newClient;
  }
}
