import { container } from "tsyringe";

import ClientsRepository from "@src/Repositories/ClientsRepository";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);
