import ICreateClientDTO from "@src/DTOs/ICreateClientDTO";
import Client from "@src/Entities/Client";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import { v4 } from "uuid";

class FakeClientsRepository implements IClientsRepository {
  private clients: Client[] = [];

  public async create(clientData: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, { id: v4() }, clientData);

    this.clients.push(client);

    return Promise.resolve(client);
  }

  public async save(client: Client): Promise<Client> {
    const findIndex = this.clients.findIndex(
      (requestedClient: Client) => requestedClient.id === client.id
    );

    this.clients[findIndex] = client;

    return Promise.resolve(client);
  }

  public async delete(client: Client): Promise<void> {
    const findIndex = this.clients.findIndex(
      (requestedClient: Client) => requestedClient.id === client.id
    );

    this.clients.splice(findIndex, 1);
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const findClient = this.clients.find(
      (client: Client) => String(client.email) === String(email)
    );

    return Promise.resolve(findClient);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const findClient = this.clients.find(
      (requestedClient: Client) => String(requestedClient.id) === String(id)
    );

    return Promise.resolve(findClient);
  }
}

export default FakeClientsRepository;
