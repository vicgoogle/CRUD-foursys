import ICreateRentDTO from "@src/DTOs/ICreateRentDTO";
import Rent from "@src/Entities/Rent";

export default interface IRentsRepository {
  create(data: ICreateRentDTO): Promise<Rent>;
  save(rent: Rent): Promise<Rent>;
  delete(rent: Rent): Promise<void>;
  list(): Promise<Rent[]>;
  findByClientId(client: string | undefined): Promise<Rent[] | undefined>;
  findById(id: string | undefined): Promise<Rent | undefined>;
}
