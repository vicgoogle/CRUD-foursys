import { inject, injectable } from "tsyringe";
import AppError from "@src/Errors/AppError";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import CryptoJS from "crypto-js";

@injectable()
export default class CreateService {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  public async execute(email: string, password: string) {
    const findUser = await this.clientsRepository.findByEmail(email);

    if (!findUser) {
      throw new AppError("Usuário não encontrado");
    }

    const encrypted = CryptoJS.HmacMD5(password, "a1b2c3").toString();

    if (findUser.password != encrypted) {
      throw new AppError("Senha incorreta");
    }

    const client = await this.clientsRepository.loginByEmailAndPassword(
      email,
      encrypted
    );

    return client;
  }
}
