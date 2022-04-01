import AppError from "@src/Errors/AppError";
import FakeClientsRepository from "@src/Repositories/FakeRepositories/FakeClientsRepository";
import CreateService from "./CreateService";
import DeleteService from "./DeleteService";

let deleteService: DeleteService;
let createService: CreateService;
let fakeClientsRepository: FakeClientsRepository;

describe("ReadClient", () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    deleteService = new DeleteService(fakeClientsRepository);
    createService = new CreateService(fakeClientsRepository);
  });

  it("Should be able to read client", async () => {
    const createdClient = await createService.execute({
      name: "teste1",
      email: "teste1@gmail.com",
      phone: "11934569876",
    });

    await expect(
      deleteService.execute(createdClient.id)
    ).resolves.not.toThrow();
  });

  it("Should not be able to read client (id does not exist)", async () => {
    await expect(
      deleteService.execute("an-id-that-does-not-exist")
    ).rejects.toBeInstanceOf(AppError);
  });
});
