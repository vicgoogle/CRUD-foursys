import Client from "@src/Entities/Client";
import Equipment from "@src/Entities/Equipment";

export default interface ICreateRentDTO {
  equipment: Equipment;
  client: Client;
  dateStart: string;
  nameEquipment: string;
  dateEnd: string;
}
