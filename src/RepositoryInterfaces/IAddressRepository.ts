import ICreateAddressDTO from "@src/DTOs/ICreateAddressDTO";
import Address from "@src/Entities/Address";

export default interface IAddressRepository {
  findById(id: string): Promise<Address | undefined>;
  create(data: ICreateAddressDTO): Promise<Address>;
  save(address: Address): Promise<Address>;
  delete(address: Address): Promise<void>;
  list(): Promise<Address[]>;
  findByClientId(client: string | undefined): Promise<Address[] | undefined>;
}
