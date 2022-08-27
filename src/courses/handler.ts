import { Handler } from "aws-lambda"
import container from "../config/inversify.config"
import { ResponseManager } from "../common/utils/response-manager.utils"
import { RequestManager, RequestParameters } from "../common/utils/request-manager.utils"
import { PartnersService } from "./services/partners.service"
import { CategoryService } from "./services/category.service"
import { CourseService } from "./services/course.service"

const service = container.get<PartnersService>(PartnersService)
const categoryService = container.get<CategoryService>(CategoryService)
const courseService = container.get<CourseService>(CourseService)

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

export const allCourses: Handler = async (event: any) => {
  const courses = await courseService.getAll()
  return ResponseManager.handleResponse(courses)
}

export const createCourse: Handler = async (event: any) => {
  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const course = await courseService.create(req.body)
  return ResponseManager.handleResponse(course)
}

export const updateCourse: Handler = async (event: any) => {
  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const course = await courseService.update(req.pathParameters.id, req.body)
  return ResponseManager.handleResponse(course)
}
