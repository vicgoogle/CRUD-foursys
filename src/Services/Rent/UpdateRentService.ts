import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";
import Rent from "@src/Entities/Rent";

interface IRequest {
  id: string;
  nameEquipment: string;
  dateStart: string;
  dateEnd: string;
}

@injectable()
export default class UpdateService {
  constructor(
    @inject("RentsRepository")
    private rentsRepository: IRentsRepository
  ) {}

  public async execute({ id, dateStart, dateEnd }: IRequest): Promise<Rent> {
    const findRent = await this.rentsRepository.findById(id);

    if (!findRent || !findRent.id) {
      throw new AppError("Aluguel não encontrado");
    }

    findRent.dateStart = dateStart;
    findRent.dateEnd = dateEnd;

    const newRent = await this.rentsRepository.save(findRent);

    return newRent;
  }
}
