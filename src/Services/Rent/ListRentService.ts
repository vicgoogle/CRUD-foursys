import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

@injectable()
export default class ListRentService {
  constructor(
    @inject("RentsRepository")
    private rentRepository: IRentsRepository
  ) {}

  public async execute(): Promise<Rent[]> {
    const findEquipment = await this.rentRepository.list();

    return findEquipment;
  }
}
