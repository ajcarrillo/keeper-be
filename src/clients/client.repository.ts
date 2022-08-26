import { injectable } from "inversify"
import { BaseRepositoryClass } from "../common/classes/base-repository.class"
import Client from "./entities/client.model"
import { ClientRepositoryInterface } from "./interfaces/client-repository.interface"

@injectable()
export class ClientRepository extends BaseRepositoryClass<typeof Client> implements ClientRepositoryInterface {
  getModelDB(): string {
    return "Client"
  }
}
