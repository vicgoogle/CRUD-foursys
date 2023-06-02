import Client from "@src/Entities/Client";

export default interface ICreateAddressDTO {
  client: Client | undefined;
  zipCode: string;
  number: string;
  complement: string;
}
