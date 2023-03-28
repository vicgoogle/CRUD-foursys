import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Equipment from "@src/Entities/Equipment";

interface IRequest {
  id: string;
  nameEquipment: string;
  typeEquipment: string;
  priceEquipment: number;
  nameClient: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute({
    id,
    nameEquipment,
    typeEquipment,
    priceEquipment,
    nameClient,
  }: IRequest): Promise<Equipment> {
    const findClient = await this.equipmentsRepository.findById(id);

    if (!findClient) {
      throw new AppError("Equipamento não encontrado");
    }

    findClient.nameEquipment = nameEquipment;
    findClient.typeEquipment = typeEquipment;
    findClient.priceEquipment = priceEquipment;
    findClient.nameClient = nameClient;

    const newClient = await this.equipmentsRepository.save(findClient);

    return newClient;
  }
}
