import ICreateRentDTO from "@src/DTOs/ICreateRentDTO";
import Rent from "@src/Entities/Rent";

export default interface IRentsRepository {
  create(data: ICreateRentDTO): Promise<Rent>;
  save(rent: Rent): Promise<Rent>;
  delete(rent: Rent): Promise<void>;
  findById(id: string): Promise<Rent | undefined>;
}
