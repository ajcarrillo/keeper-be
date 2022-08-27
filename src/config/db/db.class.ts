import mongoose from "mongoose"
import { injectable } from "inversify"
import { DbClientInterface } from "../../common/interfaces/db-client.interface"
import Client from "../../clients/entities/client.model"
import Partner from "../../courses/entities/partner.model"

@injectable()
export class DbClass implements DbClientInterface {
  getModels() {
    return {
      Client,
      Partner,
    }
  }

  getUsableObject(client: Object | void) {
    return { ...client, ...this.getModels() }
  };

  getClient(): Promise<void | typeof import("mongoose")> {
    return mongoose.connect(process.env.DB || "mongodb://localhost:27017/keeperdb")
      .catch(e => console.error(e))
  }

  async getDbConnection(): Promise<any> {
    let mongooseClient
    if (process.env.NODE_ENV === "development") {
      if (!global.mongooseClient) {
        mongooseClient = await this.getClient()
        global.mongooseClient = mongooseClient
        return this.getUsableObject(mongooseClient)
      } else {
        mongooseClient = global.mongooseClient
        return this.getUsableObject(mongooseClient)
      }
    }
    mongooseClient = await this.getClient()
    return this.getUsableObject(mongooseClient)
  }


}
