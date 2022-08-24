import { injectable } from "inversify"
import { DatabaseManager } from "../../config/db/db"
import { Category } from "../entities"


@injectable()
export class CategoryService {
  private _mongoManager: DatabaseManager

  constructor(
    mongoManager: DatabaseManager,
  ) {
    this._mongoManager = mongoManager
  }

  async getAll(): Promise<Category[]> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Category)
    const categories = await repository.find()

    await this._mongoManager.close()

    return new Promise((resolve) => {
      resolve(categories)
    })
  }

  async create(category: Category): Promise<Category> {
    await this._mongoManager.initialize()

    const repository = await this._mongoManager.getRepository(Category)
    await repository.save(category)

    await this._mongoManager.close()

    return new Promise((resolve) => {
      resolve(category)
    })
  }
}

