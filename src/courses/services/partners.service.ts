import { injectable } from "inversify"
import { DatabaseManager } from "../../config/db/db"
import { Partner } from "../entities"

@injectable()
export class PartnersService {
  private _mongoManager: DatabaseManager

  constructor(
    mongoManager: DatabaseManager,
  ) {
    this._mongoManager = mongoManager
  }

  async getAll(): Promise<Partner[]> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Partner)
    const partners = await repository.find()

    return new Promise((resolve) => {
      resolve(partners)
    })
  }

  async create(partner: Partner): Promise<Partner> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Partner)
    await repository.save(partner)

    return new Promise((resolve) => {
      resolve(partner)
    })
  }
}
