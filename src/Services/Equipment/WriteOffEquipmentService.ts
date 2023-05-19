import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

interface IRequest {
  id: string;
}

@injectable()
export default class WriteOffEquipmentService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Equipment> {
    const findEquipment = await this.equipmentsRepository.findById(id);

    if (!findEquipment) {
      throw new AppError("Equipamento não encontrado");
    }

    findEquipment.isRented = true;

    const newClient = await this.equipmentsRepository.save(findEquipment);

    return newClient;
  }
}
