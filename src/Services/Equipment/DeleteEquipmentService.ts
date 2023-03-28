import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IEquipmentsRepository from "@src/RepositoryInterfaces/IEquipmentsRepository";

@injectable()
export default class DeleteService {
  constructor(
    @inject("EquipmentsRepository")
    private equipmentsRepository: IEquipmentsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const findEquipment = await this.equipmentsRepository.findById(id);

    if (!findEquipment || !findEquipment.id) {
      throw new AppError("Equipamento não encontrado");
    }

    try {
      await this.equipmentsRepository.delete(findEquipment);
    } catch (error) {
      throw new AppError("Não foi possível excluir o equipamento");
    }
  }
}
