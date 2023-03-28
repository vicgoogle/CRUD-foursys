import ICreateClientDTO from "@src/DTOs/ICreateClientDTO";
import Client from "@src/Entities/Client";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import { getRepository, Repository } from "typeorm";

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async create(clientData: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(clientData);

    await this.ormRepository.save(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async findByName(name: string): Promise<Client | undefined> {
    const foundName = await this.ormRepository.findOne({
      where: { name },
    });

    return foundName;
  }

  public async findById(id: string): Promise<Client | undefined> {
    const foundClient = await this.ormRepository.findOne({
      where: { id },
    });

    return foundClient;
  }

  public async delete(client: Client): Promise<void> {
    await this.ormRepository.delete(client);
  }
}

export default ClientsRepository;
