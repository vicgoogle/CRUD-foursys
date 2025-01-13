import { inject, injectable } from "tsyringe";
import Rent from "@src/Entities/Rent";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import Client from "@src/Entities/Client";

interface IRequest {
  equipment: string;
  nameEquipment?: string;
  client: string;
  dateStart: string;
  dateEnd: string;
}

@injectable()
export default class CreateService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository,
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository,
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute({
    equipment,
    client,
    nameEquipment,
    dateStart,
    dateEnd,
  }: IRequest): Promise<Rent> {
    const findEquipment = await this.equipmentsRepository.findById(equipment);
    const findClient = await this.clientsRepository.findById(client);

    if (!findEquipment) {
      throw new AppError("Equipamento não encontrado");
    }

    if (!findClient) {
      throw new AppError("Cliente não encontrado");
    }

    //    if (findEquipment.isRented) {
    //      throw new AppError("Equipamento já alugado");a
    //    }

    findEquipment.isRented = true;
    findEquipment.client = findClient;
    nameEquipment = findEquipment.nameEquipment;

    await this.equipmentsRepository.save(findEquipment);

    const rent = await this.rentsRepository.create({
      equipment: findEquipment,
      nameEquipment,
      client: findClient,
      dateStart,
      dateEnd,
    });

    return rent;
  }
}
