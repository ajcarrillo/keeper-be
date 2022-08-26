import { inject, injectable } from "inversify"
import { TYPES } from "../config/types"
import Client from "./entities/client.model"
import { CreateClientDto } from "./dto/create-client.dto"
import { validateOrReject } from "class-validator"
import { plainToClass } from "class-transformer"
import { ClientRepositoryInterface } from "./interfaces/client-repository.interface"

@injectable()
export class ClientService {

  constructor(
    @inject(TYPES.ClientRepositoryInterface) private _clientRepository: ClientRepositoryInterface,
  ) {
  }

  async getAll(): Promise<typeof Client[]> {
    const clients = await this._clientRepository.all()

    return new Promise((resolve) => {
      resolve(clients)
    })
  }

  async create(client: CreateClientDto): Promise<typeof Client> {

    try {
      let createClientDto: CreateClientDto = plainToClass(CreateClientDto, client)
      await validateOrReject(createClientDto)

      const newClient = await this._clientRepository.save(client)

      return new Promise((resolve) => {
        resolve(newClient)
      })
    } catch (e) {
      return new Promise((resolve) => {
        resolve(e)
      })
    }
  }

}
