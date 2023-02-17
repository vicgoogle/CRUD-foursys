import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

@injectable()
export default class ReadService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute(id: string): Promise<Rent> {
    const findClient = await this.rentsRepository.findById(id);

    if (!findClient) {
      throw new AppError("Equipamento não encontrado");
    }

    return findClient;
  }
}
