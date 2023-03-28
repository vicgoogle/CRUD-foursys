import { inject, injectable } from "tsyringe";
import Equipment from "@src/Entities/Equipment";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";

interface IRequest {
  nameEquipment: string;
  typeEquipment: string;
  priceEquipment: number;
  nameClient: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute({
    nameEquipment,
    typeEquipment,
    priceEquipment,
    nameClient,
  }: IRequest): Promise<Equipment> {
    const client = await this.equipmentsRepository.create({
      nameEquipment,
      typeEquipment,
      priceEquipment,
      nameClient,
    });

    return client;
  }
}
