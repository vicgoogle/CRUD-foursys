import AppError from "@src/Errors/AppError";
import FakeClientsRepository from "@src/Repositories/FakeRepositories/FakeClientsRepository";
import CreateService from "./CreateClientService";
import ReadService from "./ReadService";

let readService: ReadService;
let createService: CreateService;
let fakeClientsRepository: FakeClientsRepository;

describe("DeleteClient", () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    readService = new ReadService(fakeClientsRepository);
    createService = new CreateService(fakeClientsRepository);
  });

  it("Should be able to delete client", async () => {
    const createdClient = await createService.execute({
      name: "teste1",
      email: "teste1@gmail.com",
      phone: "11934569876",
    });

    await expect(readService.execute(createdClient.id)).resolves.not.toThrow();
  });

  it("Should not be able to delete client (id does not exist)", async () => {
    await expect(
      readService.execute("an-id-that-does-not-exist")
    ).rejects.toBeInstanceOf(AppError);
  });
});
