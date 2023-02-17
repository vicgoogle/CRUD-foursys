import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";

@injectable()
export default class DeleteService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findClient = await this.clientsRepository.findById(id);

    if (!findClient || !findClient.id) {
      throw new AppError("Cliente não encontrado");
    }

    try {
      await this.clientsRepository.delete(findClient);
    } catch (error) {
      throw new AppError("Não foi possível excluir o cliente");
    }
  }
}
