import ICreateEquipmentDTO from "@src/DTOs/ICreateEquipmentDTO";
import Equipment from "@src/Entities/Equipment";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";
import { getRepository, Repository } from "typeorm";

class EquipmentsRepository implements IEquipmentsRepository {
  private ormRepository: Repository<Equipment>;

  constructor() {
    this.ormRepository = getRepository(Equipment);
  }

  public async create(equipmentData: ICreateEquipmentDTO): Promise<Equipment> {
    const equipment = this.ormRepository.create(equipmentData);

    await this.ormRepository.save(equipment);

    return equipment;
  }

  public async save(equipment: Equipment): Promise<Equipment> {
    return this.ormRepository.save(equipment);
  }

  public async list(): Promise<Equipment[]> {
    const foundEquipments = await this.ormRepository.find();

    return foundEquipments;
  }

  public async findByEmail(email: string): Promise<Equipment | undefined> {
    const foundEmail = await this.ormRepository.findOne({
      where: { email },
    });

    return foundEmail;
  }

  public async findById(id: string): Promise<Equipment | undefined> {
    const foundClient = await this.ormRepository.findOne({
      where: { id },
    });

    return foundClient;
  }

  public async delete(equipment: Equipment): Promise<void> {
    await this.ormRepository.delete(equipment);
  }
}

export default EquipmentsRepository;
