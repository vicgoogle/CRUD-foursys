import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

@injectable()
export default class ListRentByClientService {
  constructor(
    @inject("RentsRepository")
    private rentRepository: IRentsRepository
  ) {}

  public async execute(client: string): Promise<Rent[] | undefined> {
    const findRent = await this.rentRepository.findByClientId(client);

    if (!findRent) {
      throw new AppError("Equipamento não encontrado");
    }

    return findRent;
  }
}
