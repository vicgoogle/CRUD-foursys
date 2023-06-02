import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";
import Address from "@src/Entities/Address";

@injectable()
export default class ListAddressByClientService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute(client: string): Promise<Address[] | undefined> {
    const findAddress = await this.addressRepository.findByClientId(client);

    if (!findAddress) {
      throw new AppError("Endereço não encontrado");
    }

    return findAddress;
  }
}
