import Client from "@src/Entities/Client";

export default interface ICreateEquipmentDTO {
  nameEquipment: string;
  typeEquipment: string;
  priceEquipment: number;
  description: string;
  isRented: boolean;
  client: Client | undefined;
  photo: string;
}
