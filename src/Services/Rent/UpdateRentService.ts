import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

interface IRequest {
  id: string;
  nameEquipment: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute({ id, nameEquipment }: IRequest): Promise<Rent> {
    const findEquipment = await this.rentsRepository.findById(id);

    if (!findEquipment || !findEquipment.id) {
      throw new AppError("Equipamento não encontrado");
    }

    findEquipment.nameEquipment = nameEquipment;

    const newRent = await this.rentsRepository.save(findEquipment);

    return newRent;
  }
}
