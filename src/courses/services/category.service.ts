import { inject, injectable } from "inversify"
import { TYPES } from "../../config/types"
import { CategoryRepositoryInterface } from "../interfaces/category-repository.interface"
import Category from "../entities/category.model"
import { CreateCategoryDto } from "../dto/create-category.dto"
import { plainToClass } from "class-transformer"
import { validateOrReject } from "class-validator"


@injectable()
export class CategoryService {

  constructor(
    @inject(TYPES.CategoryRepositoryInterface) private _categoryRepository: CategoryRepositoryInterface,
  ) {
  }

  async getAll(): Promise<typeof Category[]> {
    const categories = await this._categoryRepository.all()

    return new Promise((resolve) => {
      resolve(categories)
    })
  }

  async create(category: CreateCategoryDto): Promise<typeof Category> {
    try {
      let createCategoryDto: CreateCategoryDto = plainToClass(CreateCategoryDto, category)
      await validateOrReject(createCategoryDto)

      const newCategory = await this._categoryRepository.save(category)

      return new Promise((resolve) => {
        resolve(newCategory)
      })
    } catch (e) {
      return new Promise((resolve) => {
        resolve(e)
      })
    }
  }
}

