import { inject, injectable } from "tsyringe";
import Client from "@src/Entities/Client";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import CryptoJS from "crypto-js";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";

interface IRequest {
  name: string;
  phone: string;
  cpf: string;
  birthDate: string;
  zipCode: string;
  number: string;
  complement: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute({
    name,
    phone,
    email,
    cpf,
    birthDate,
    zipCode,
    number,
    complement,
    password,
  }: IRequest): Promise<Client> {
    const findEmail = await this.clientsRepository.findByCpf(cpf);

    if (findEmail) {
      throw new AppError("Usuário já cadastrado no sistema");
    }

    const encrypted = CryptoJS.HmacMD5(password, "a1b2c3").toString();

    const client = await this.clientsRepository.create({
      name,
      phone,
      cpf,
      birthDate,
      zipCode,
      number,
      complement,
      email,
      password: encrypted,
    });

    await this.addressRepository.create({
      zipCode,
      number,
      complement,
      client,
    });

    return client;
  }
}
