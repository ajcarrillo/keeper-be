import "reflect-metadata"
import { Container } from "inversify"
import { DatabaseManager } from "./db/db"
import { ClientService } from "../clients/client.service"
import { PartnersService } from "../courses/services/partners.service"
import { CategoryService } from "../courses/services/category.service"
import { CourseService } from "../courses/services/course.service"

const container: Container = new Container({ defaultScope: "Singleton" })

container.bind<DatabaseManager>(DatabaseManager).to(DatabaseManager)
container.bind<ClientService>(ClientService).to(ClientService)
container.bind<PartnersService>(PartnersService).to(PartnersService)
container.bind<CategoryService>(CategoryService).to(CategoryService)
container.bind<CourseService>(CourseService).to(CourseService)

export default container
