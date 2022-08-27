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

  async all(populate: any[] = []): Promise<Array<T>> {
    const db = await this.db.getDbConnection()
    const model = await db[this.getModelDB()].find().populate(populate)
    return new Promise((resolve) => {
      resolve(model)
    })
  }

  async getById(id: string): Promise<T> {
    const db = await this.db.getDbConnection()
    const model = await db[this.getModelDB()].findById(id)
    return new Promise((resolve) => {
      resolve(model)
    })
  }

  async save(model: T): Promise<T> {
    const db = await this.db.getDbConnection()
    const newModel = await db[this.getModelDB()].create(model)
    await newModel.save()
    return new Promise((resolve) => {
      resolve(newModel)
    })
  }

  async updateById(id: string, model: T): Promise<T> {
    const db = await this.db.getDbConnection()
    const newModel = await db[this.getModelDB()].findByIdAndUpdate(id, model, { new: true })
    return new Promise((resolve) => {
      resolve(newModel)
    })
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
