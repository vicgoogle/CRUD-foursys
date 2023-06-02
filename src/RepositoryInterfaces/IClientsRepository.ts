import ICreateClientDTO from "@src/DTOs/ICreateClientDTO";
import Client from "@src/Entities/Client";

export default interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  loginByEmailAndPassword(
    email: string,
    password: string
  ): Promise<Client | undefined>;
  findByCpf(cpf: string): Promise<Client | undefined>;
  findById(id: string): Promise<Client | undefined>;
}
