import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

@injectable()
export default class ListEquipmentService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute(): Promise<Equipment[]> {
    const findEquipment = await this.equipmentsRepository.list();

    return findEquipment;
  }
}
