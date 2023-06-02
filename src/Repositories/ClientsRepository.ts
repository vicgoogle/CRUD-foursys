import ICreateClientDTO from "@src/DTOs/ICreateClientDTO";
import Address from "@src/Entities/Address";
import Client from "@src/Entities/Client";
import AppError from "@src/Errors/AppError";
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

  public async loginByEmailAndPassword(
    email: string,
    password: string
  ): Promise<Client | undefined> {
    const foundEmail = await this.ormRepository.findOne({
      where: { email },
    });

    if (!foundEmail) {
      throw new AppError("Usuário não encontrado");
    }

    const login = await this.ormRepository.findOne({
      where: { email, password },
    });

    return login;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async findByCpf(cpf: string): Promise<Client | undefined> {
    const foundUser = await this.ormRepository.findOne({
      where: { cpf },
    });

    return foundUser;
  }

  public async findById(cpf: string): Promise<Client | undefined> {
    const foundClient = await this.ormRepository.findOne({
      where: { cpf },
    });

    return foundClient;
  }

  public async delete(client: Client): Promise<void> {
    await this.ormRepository.delete(client);
  }
}

export default ClientsRepository;
