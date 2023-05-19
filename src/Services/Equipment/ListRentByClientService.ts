import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

@injectable()
export default class ListEquipmentByClientService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentRepository: IEquipmentsRepository
  ) {}

  public async execute(client: string): Promise<Equipment[] | undefined> {
    const findEquipment = await this.equipmentRepository.findByClientId(client);

    if (!findEquipment) {
      throw new AppError("Equipamento não encontrado");
    }

    return findEquipment;
  }
}
