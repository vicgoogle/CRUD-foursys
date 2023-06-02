import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";

@injectable()
export default class DeleteService {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findAddress = await this.addressRepository.findById(id);

    if (!findAddress || !findAddress.id) {
      throw new AppError("Endereço não encontrado");
    }

    try {
      await this.addressRepository.delete(findAddress);
    } catch (error) {
      throw new AppError("Não foi possível excluir o endereço");
    }
  }
}
