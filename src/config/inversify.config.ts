import "reflect-metadata"
import { Container } from "inversify"
import { DatabaseManager } from "./db/db"
import { ClientService } from "../clients/client.service"

const container: Container = new Container({ defaultScope: "Singleton" })

container.bind<DatabaseManager>(DatabaseManager).to(DatabaseManager)
container.bind<ClientService>(ClientService).to(ClientService)

export default container
