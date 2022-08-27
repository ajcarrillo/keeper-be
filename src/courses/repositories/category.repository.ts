import { injectable } from "inversify"
import { BaseRepositoryClass } from "../../common/classes/base-repository.class"
import { CategoryRepositoryInterface } from "../interfaces/category-repository.interface"
import Category from "../entities/category.model"

@injectable()
export class CategoryRepository extends BaseRepositoryClass<typeof Category> implements CategoryRepositoryInterface {
  getModelDB(): string {
    return "Category"
  }
}
