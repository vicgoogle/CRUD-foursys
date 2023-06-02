import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import Client from "@src/Entities/Client";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";
import Address from "@src/Entities/Address";

@injectable()
export default class ReadService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute(id: string): Promise<Address> {
    const findAddress = await this.addressRepository.findById(id);

    if (!findAddress) {
      throw new AppError("Cliente não encontrado");
    }

    return findAddress;
  }
}
