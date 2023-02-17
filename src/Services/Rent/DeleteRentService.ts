import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";

@injectable()
export default class DeleteService {
  constructor(
    @inject("ClientsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findClient = await this.rentsRepository.findById(id);

    if (!findClient || !findClient.id) {
      throw new AppError("Equipamento não encontrado");
    }

    try {
      await this.rentsRepository.delete(findClient);
    } catch (error) {
      throw new AppError("Não foi possível excluir o equipamento");
    }
  }
}
