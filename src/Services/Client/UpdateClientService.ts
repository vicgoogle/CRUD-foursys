import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import Client from "@src/Entities/Client";
import CryptoJS from "crypto-js";

interface IRequest {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  cpf: string;
  zipCode: string;
  number: string;
  complement: string;
  email: string;
  password: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({
    id,
    name,
    phone,
    email,
    birthDate,
    cpf,
    password,
  }: IRequest): Promise<Client> {
    const findClient = await this.clientsRepository.findById(id);

    const verifyClientEmail = await this.clientsRepository.findByEmail(email);

    if (!findClient || !findClient.id) {
      throw new AppError("Cliente não encontrado");
    }

    const encrypted = CryptoJS.HmacMD5(password, "a1b2c3").toString();

    findClient.name = name;
    findClient.phone = phone;
    findClient.email = email;
    findClient.birthDate = birthDate;
    findClient.cpf = cpf;
    findClient.password = encrypted;

    const newClient = await this.clientsRepository.save(findClient);

    return newClient;
  }
}
