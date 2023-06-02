import { inject, injectable } from "tsyringe";
import Address from "@src/Entities/Address";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import AppError from "@src/Errors/AppError";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";

interface IRequest {
  zipCode: string;
  number: string;
  complement: string;
  client: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository,
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({
    zipCode,
    number,
    complement,
    client,
  }: IRequest): Promise<Address> {
    const findClient = await this.clientsRepository.findById(client);

    if (!findClient) {
      throw new AppError("Cliente não encontrado");
    }

    const equipment = await this.addressRepository.create({
      zipCode,
      number,
      complement,
      client: findClient,
    });

    return equipment;
  }
}
