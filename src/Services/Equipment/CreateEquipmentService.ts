import { inject, injectable } from "tsyringe";
import Equipment from "@src/Entities/Equipment";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import Client from "@src/Entities/Client";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import AppError from "@src/Errors/AppError";

interface IRequest {
  nameEquipment: string;
  typeEquipment: string;
  priceEquipment: number;
  description: string;
  photo: string;
  client: string;
  isRented: boolean;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository,
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({
    nameEquipment,
    typeEquipment,
    priceEquipment,
    description,
    client,
    photo,
  }: IRequest): Promise<Equipment> {
    const findClient = await this.clientsRepository.findById(client);

    if (!findClient) {
      throw new AppError("Cliente não encontrado");
    }

    const equipment = await this.equipmentsRepository.create({
      nameEquipment,
      typeEquipment,
      priceEquipment,
      description,
      client: findClient,
      isRented: false,
      photo,
    });

    return equipment;
  }
}
