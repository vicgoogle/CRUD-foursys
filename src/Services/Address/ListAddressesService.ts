import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import Address from "@src/Entities/Address";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";

@injectable()
export default class ListAddressesService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute(): Promise<Address[]> {
    const findAddresses = await this.addressRepository.list();

    return findAddresses;
  }
}
