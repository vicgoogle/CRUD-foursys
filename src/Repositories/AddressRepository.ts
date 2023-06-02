import ICreateAddressDTO from "@src/DTOs/ICreateAddressDTO";
import ICreateClientDTO from "@src/DTOs/ICreateClientDTO";
import Address from "@src/Entities/Address";
import AppError from "@src/Errors/AppError";
import IAddressRepository from "@src/RepositoryInterfaces/IAddressRepository";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import { getRepository, Repository } from "typeorm";

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(addressData);

    await this.ormRepository.save(address);

    return address;
  }

  public async save(address: Address): Promise<Address> {
    return this.ormRepository.save(address);
  }

  public async list(): Promise<Address[]> {
    const foundAddresses = await this.ormRepository.find();

    return foundAddresses;
  }

  public async findByClientId(client: string): Promise<Address[] | undefined> {
    const foundEquipment = await this.ormRepository.find({
      where: { client },
    });

    return foundEquipment;
  }

  public async findById(id: string): Promise<Address | undefined> {
    const foundAddress = await this.ormRepository.findOne({
      where: { id },
    });

    return foundAddress;
  }

  public async delete(client: Address): Promise<void> {
    await this.ormRepository.delete(client);
  }
}

export default AddressRepository;
