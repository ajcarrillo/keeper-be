import { BaseRepositoryInterface } from "../interfaces/base-repository.interface"
import { inject, injectable } from "inversify"
import { TYPES } from "../../config/types"
import { DbClientInterface } from "../interfaces/db-client.interface"

@injectable()
export abstract class BaseRepositoryClass<T> implements BaseRepositoryInterface<T> {
  constructor(
    @inject(TYPES.DbClientInterface) protected db: DbClientInterface,
  ) {
  }

  abstract getModelDB(): string;

  async all(): Promise<Array<T>> {
    const db = await this.db.getDbConnection()
    const model = await db[this.getModelDB()].find()
    return new Promise((resolve) => {
      resolve(model)
    })
  }

  getById(id: string): Promise<any> {
    throw new Error("Method not implemented.")
  }

  async save(model: T): Promise<T> {
    const db = await this.db.getDbConnection()
    const newModel = await db[this.getModelDB()].create(model)
    await newModel.save()
    return new Promise((resolve) => {
      resolve(newModel)
    })
  }

  updateById(id: string, model: any): Promise<any> {
    throw new Error("Method not implemented.")
  }

  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

  deleteByIdLogic(id: string): Promise<any> {
    throw new Error("Method not implemented.")
  }

  search(search: string): Promise<Array<any>> {
    throw new Error("Method not implemented.")
  }
}
