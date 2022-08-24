import { PartnersService } from "./services/partners.service"
import container from "../config/inversify.config"
import { Handler } from "aws-lambda"
import { ResponseManager } from "../common/utils/response-manager.utils"
import { RequestManager, RequestParameters } from "../common/utils/request-manager.utils"
import { CategoryService } from "./services/category.service"

const service = container.get<PartnersService>(PartnersService)
const categoryService = container.get<CategoryService>(CategoryService)

export const allPartners: Handler = async (event: any) => {
  const partners = await service.getAll()
  return ResponseManager.handleResponse(partners)
}

export const createPartner: Handler = async (event: any) => {
  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const partner = await service.create(req.body)
  return ResponseManager.handleResponse(partner)
}

export const allCategories: Handler = async (event: any) => {
  const categories = await categoryService.getAll()
  return ResponseManager.handleResponse(categories)
}

export const createCategory: Handler = async (event: any) => {
  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const category = await categoryService.create(req.body)
  return ResponseManager.handleResponse(category)
}
