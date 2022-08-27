import "reflect-metadata"
import { Container } from "inversify"
import { DatabaseManager } from "./db/db"
import { ClientService } from "../clients/client.service"
import { PartnersService } from "../courses/services/partners.service"
import { CategoryService } from "../courses/services/category.service"
import { CourseService } from "../courses/services/course.service"
import { DbClass } from "./db/db.class"
import { DbClientInterface } from "../common/interfaces/db-client.interface"
import { TYPES } from "./types"
import { ClientRepositoryInterface } from "../clients/interfaces/client-repository.interface"
import { ClientRepository } from "../clients/client.repository"
import { PartnerRepositoryInterface } from "../courses/interfaces/partner-repository.interface"
import { PartnerRepository } from "../courses/repositories/partner.repository"
import { CategoryRepositoryInterface } from "../courses/interfaces/category-repository.interface"
import { CategoryRepository } from "../courses/repositories/category.repository"

const container: Container = new Container({ defaultScope: "Singleton" })

container.bind<DatabaseManager>(DatabaseManager).to(DatabaseManager)
container.bind<ClientService>(ClientService).to(ClientService)
container.bind<PartnersService>(PartnersService).to(PartnersService)
container.bind<CategoryService>(CategoryService).to(CategoryService)
container.bind<CourseService>(CourseService).to(CourseService)
container.bind<DbClientInterface>(TYPES.DbClientInterface).to(DbClass)
container.bind<ClientRepositoryInterface>(TYPES.ClientRepositoryInterface).to(ClientRepository)
container.bind<PartnerRepositoryInterface>(TYPES.PartnerRepositoryInterface).to(PartnerRepository)
container.bind<CategoryRepositoryInterface>(TYPES.CategoryRepositoryInterface).to(CategoryRepository)

export default container
