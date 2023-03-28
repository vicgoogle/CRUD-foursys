import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

interface IRequest {
  id: string;
  nameEquipment: string;
  rentTime: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute({
    id,
    nameEquipment,
    rentTime,
  }: IRequest): Promise<Rent> {
    const findRent = await this.rentsRepository.findById(id);

    if (!findRent || !findRent.id) {
      throw new AppError("Aluguel não encontrado");
    }

    findRent.nameEquipment = nameEquipment;

    const newRent = await this.rentsRepository.save(findRent);

    return newRent;
  }
}
