import { inject, injectable } from "tsyringe";
import Client from "@src/Entities/Client";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";

interface IRequest {
  name: string;
  phone: string;
  email: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({ name, phone, email }: IRequest): Promise<Client> {
    const findEmail = await this.clientsRepository.findByEmail(email);

    if (findEmail) {
      throw new AppError("Email já encontrado");
    }

    const client = await this.clientsRepository.create({
      name,
      phone,
      email,
    });

    return client;
  }
}
