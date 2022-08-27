import { injectable } from "inversify"
import { BaseRepositoryClass } from "../../common/classes/base-repository.class"
import Partner from "../entities/partner.model"
import { PartnerRepositoryInterface } from "../interfaces/partner-repository.interface"

@injectable()
export class PartnerRepository extends BaseRepositoryClass<typeof Partner> implements PartnerRepositoryInterface {
  getModelDB(): string {
    return "Partner"
  }
}
