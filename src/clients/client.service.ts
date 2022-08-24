import { injectable } from "inversify"
import { DatabaseManager } from "../config/db/db"
import { Client } from "./entities"

@injectable()
export class ClientService {
  private _mongoManager: DatabaseManager

  constructor(
    mongoManager: DatabaseManager,
  ) {
    this._mongoManager = mongoManager
  }

  async getAll(): Promise<Client[]> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Client)
    const clients = await repository.find()

    return new Promise((resolve) => {
      resolve(clients)
    })
  }

  async create(client: Client): Promise<Client> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Client)
    await repository.save(client)

    return new Promise((resolve) => {
      resolve(client)
    })
  }

}
