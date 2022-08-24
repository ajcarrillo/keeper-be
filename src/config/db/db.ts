import "reflect-metadata"
import { DataSource, MongoRepository } from "typeorm"
import { Client } from "../../clients/entities"
import { injectable } from "inversify"


export const AppDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb://localhost:27017/keeperdb",
  synchronize: true,
  logging: true,
  entities: [Client],
})

@injectable()
export class DatabaseManager {
  async initialize() {
    return await AppDataSource.initialize()
  }

  async getRepository(entity: any): Promise<MongoRepository<any>> {
    return AppDataSource.getMongoRepository(entity)
  }
}
