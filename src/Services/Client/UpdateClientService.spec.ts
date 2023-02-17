import AppError from "@src/Errors/AppError";
import FakeClientsRepository from "@src/Repositories/FakeRepositories/FakeClientsRepository";
import CreateService from "./CreateClientService";
import UpdateService from "./UpdateClientService";

let createService: CreateService;
let updateService: UpdateService;
let fakeClientsRepository: FakeClientsRepository;

describe("CreateClient", () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    createService = new CreateService(fakeClientsRepository);
    updateService = new UpdateService(fakeClientsRepository);
    jest.resetModules();
  });

  it("Should be able to update client", async () => {
    const createdClient = await createService.execute({
      name: "teste1",
      email: "teste1@gmail.com",
      phone: "11934569876",
    });

    await expect(
      updateService.execute({
        name: "mudado1",
        email: "mudado1@gmail.com",
        phone: "11999999999",
        id: createdClient.id,
      })
    ).resolves.not.toThrow();
  });

  it("Should not be able to update client (id does not exist)", async () => {
    await expect(
      updateService.execute({
        name: "mudado1",
        email: "mudado1@gmail.com",
        phone: "11999999999",
        id: "an-id-that-does-not-exist",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to update client (email already exists)", async () => {
    const createdClient = await createService.execute({
      name: "teste1",
      email: "teste1@gmail.com",
      phone: "11934569876",
    });

    await createService.execute({
      name: "teste2",
      email: "teste2@gmail.com",
      phone: "11934569876",
    });

    await expect(
      updateService.execute({
        name: "mudado1",
        email: "teste2@gmail.com",
        phone: "11999999999",
        id: createdClient.id,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
