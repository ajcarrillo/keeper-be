import { PartnersService } from "./services/partners.service"
import container from "../config/inversify.config"
import { Handler } from "aws-lambda"
import { ResponseManager } from "../common/utils/response-manager.utils"
import { RequestManager, RequestParameters } from "../common/utils/request-manager.utils"

const service = container.get<PartnersService>(PartnersService)

export const allPartners: Handler = async (event: any) => {
  const partners = await service.getAll()
  return ResponseManager.handleResponse(partners)
}

export const createPartner: Handler = async (event: any) => {
  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const partner = await service.create(req.body)
  return ResponseManager.handleResponse(partner)
}
