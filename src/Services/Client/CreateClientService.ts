import { inject, injectable } from "tsyringe";
import Client from "@src/Entities/Client";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import CryptoJS from "crypto-js";

interface IRequest {
  name: string;
  phone: string;
  cpf: string;
  birthDate: string;
  address: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({
    name,
    phone,
    email,
    cpf,
    birthDate,
    address,
    password,
  }: IRequest): Promise<Client> {
    const findEmail = await this.clientsRepository.findByEmail(email);

    if (findEmail) {
      throw new AppError("Email já encontrado");
    }

    const encrypted = CryptoJS.HmacMD5(password, "a1b2c3").toString();

    const client = await this.clientsRepository.create({
      name,
      phone,
      cpf,
      birthDate,
      address,
      email,
      password: encrypted,
    });

    return client;
  }
}
