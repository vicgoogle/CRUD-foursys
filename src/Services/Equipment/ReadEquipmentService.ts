import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

@injectable()
export default class ReadService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute(id: string): Promise<Equipment> {
    const findEquipment = await this.equipmentsRepository.findById(id);

    if (!findEquipment) {
      throw new AppError("Equipamento não encontrado");
    }

    return findEquipment;
  }
}
