import ICreateRentDTO from "@src/DTOs/ICreateRentDTO";
import Rent from "@src/Entities/Rent";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import { getRepository, Repository } from "typeorm";

class RentsRepository implements IRentsRepository {
  private ormRepository: Repository<Rent>;

  constructor() {
    this.ormRepository = getRepository(Rent);
  }

  public async create(rentData: ICreateRentDTO): Promise<Rent> {
    const rent = this.ormRepository.create(rentData);

    await this.ormRepository.save(rent);

    return rent;
  }

  public async save(rent: Rent): Promise<Rent> {
    return this.ormRepository.save(rent);
  }

  public async list(): Promise<any> {
    const foundRent = await this.ormRepository.find();

    return foundRent;
  }

  public async findById(id: string): Promise<Rent | undefined> {
    const foundRent = await this.ormRepository.findOne({
      where: { id },
    });

    return foundRent;
  }

  public async delete(rent: Rent): Promise<void> {
    await this.ormRepository.delete(rent);
  }
}

export default RentsRepository;
