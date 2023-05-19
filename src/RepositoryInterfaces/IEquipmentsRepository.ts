import ICreateEquipmentDTO from "@src/DTOs/ICreateEquipmentDTO";
import Equipment from "@src/Entities/Equipment";

export default interface IEquipmentsRepository {
  create(data: ICreateEquipmentDTO): Promise<Equipment>;
  save(equipment: Equipment): Promise<Equipment>;
  delete(equipment: Equipment): Promise<void>;
  list(): Promise<Equipment[]>;
  findByClientId(client: string | undefined): Promise<Equipment[] | undefined>;
  findByEmail(email: string): Promise<Equipment | undefined>;
  findById(id: string): Promise<Equipment | undefined>;
}
