import "reflect-metadata"
import { DataSource, MongoRepository } from "typeorm"
import { Client } from "../../clients/entities"
import { injectable } from "inversify"
import { Category, Course, Partner } from "../../courses/entities"


export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb://localhost:27017/keeperdb",
  synchronize: true,
  logging: true,
  entities: [Client, Partner, Category, Course],
})

@injectable()
export class DatabaseManager {
  async initialize() {
    return await AppDataSource.initialize()
  }

  async close() {
    return await AppDataSource.close()
  }

  async getRepository(entity: any): Promise<MongoRepository<any>> {
    return AppDataSource.getMongoRepository(entity)
  }
}
