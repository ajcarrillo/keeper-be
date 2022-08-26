import { inject, injectable } from "inversify"
import { DbClientInterface } from "../common/interfaces/db-client.interface"
import { TYPES } from "../config/types"
import Client from "./entities/client.model"
import { CreateClientDto } from "./dto/create-client.dto"
import { validate, validateOrReject } from "class-validator"
import { plainToClass } from "class-transformer"

@injectable()
export class ClientService {
  private _mongooseManager: DbClientInterface

  constructor(
    @inject(TYPES.DbClientInterface) mongooseManager: DbClientInterface,
  ) {
    this._mongooseManager = mongooseManager
  }

  async getAll(): Promise<typeof Client[]> {
    const db = await this._mongooseManager.getDbConnection()

    const clients = await db.Client.find()

    return new Promise((resolve) => {
      resolve(clients)
    })
  }

  async create(client: CreateClientDto): Promise<typeof Client> {

    try {
      let createClientDto: CreateClientDto = plainToClass(CreateClientDto, client)
      await validateOrReject(createClientDto)

      const db = await this._mongooseManager.getDbConnection()

      const newClient = await db.Client.create(client)

      await newClient.save()

      return new Promise((resolve) => {
        resolve(newClient)
      })
    } catch (e) {
      console.log("Caught promise rejection (validation failed). Errors: ", e)
      return new Promise((resolve) => {
        resolve(e)
      })
    }
  }

}
