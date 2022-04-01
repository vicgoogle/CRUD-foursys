import AppError from "@src/Errors/AppError";
import FakeClientsRepository from "@src/Repositories/FakeRepositories/FakeClientsRepository";
import CreateService from "./CreateService";

let createService: CreateService;
let fakeClientsRepository: FakeClientsRepository;

describe("CreateClient", () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    createService = new CreateService(fakeClientsRepository);
    jest.resetModules();
  });

  it("Should be able to create client", async () => {
    await expect(
      createService.execute({
        name: "teste1",
        email: "teste1@gmail.com",
        phone: "11934569876",
      })
    ).resolves.not.toThrow();
  });

  it("Should not be able to create client (e-mail already exists)", async () => {
    await createService.execute({
      name: "teste2",
      email: "teste2@gmail.com",
      phone: "11924568973",
    });

    await expect(
      createService.execute({
        name: "teste1",
        email: "teste2@gmail.com",
        phone: "11934791265",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
