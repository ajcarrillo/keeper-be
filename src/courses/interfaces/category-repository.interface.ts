import { BaseRepositoryInterface } from "../../common/interfaces/base-repository.interface"
import Category from "../entities/category.model"

export interface CategoryRepositoryInterface extends BaseRepositoryInterface<typeof Category> {

}
