import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";
import Address from "@src/Entities/Address";

interface IRequest {
  id: string;
  zipCode: string;
  number: string;
  complement: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute({
    id,
    zipCode,
    number,
    complement,
  }: IRequest): Promise<Address> {
    const findAddress = await this.addressRepository.findById(id);

    if (!findAddress) {
      throw new AppError("Endereço não encontrado");
    }

    findAddress.zipCode = zipCode;
    findAddress.number = number;
    findAddress.complement = complement;

    const newClient = await this.addressRepository.save(findAddress);

    return newClient;
  }
}
