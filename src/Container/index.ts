import { container } from "tsyringe";

import RentsRepository from "@src/Repositories/RentsRepository";
import ClientsRepository from "@src/Repositories/ClientsRepository";
import IClientsRepository from "@src/RepositoryInterfaces/IClientsRepository";
import IRentsRepository from "@src/RepositoryInterfaces/IRentsRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IRentsRepository>(
  "RentsRepository",
  RentsRepository
);
