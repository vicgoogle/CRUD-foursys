import { inject, injectable } from "tsyringe";
import Rent from "@src/Entities/Rent";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";

interface IRequest {
  nameEquipment: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute({ nameEquipment }: IRequest): Promise<Rent> {
    const findEmail = await this.rentsRepository.findById(nameEquipment);

    if (findEmail) {
      throw new AppError("Equipamento já encontrado");
    }

    const rent = await this.rentsRepository.create({
      nameEquipment,
    });

    return rent;
  }
}
