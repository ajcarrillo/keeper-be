import { inject, injectable } from "inversify"
import Partner from "../entities/partner.model"
import { TYPES } from "../../config/types"
import { PartnerRepositoryInterface } from "../interfaces/partner-repository.interface"
import { CreatePartnerDto } from "../dto/create-partner.dto"
import { plainToClass } from "class-transformer"
import { validateOrReject } from "class-validator"


@injectable()
export class PartnersService {

  constructor(
    @inject(TYPES.PartnerRepositoryInterface) private _partnerRepository: PartnerRepositoryInterface,
  ) {
  }

  async getAll(): Promise<typeof Partner[]> {
    const partners = await this._partnerRepository.all()

    return new Promise((resolve) => {
      resolve(partners)
    })
  }

  async create(partner: CreatePartnerDto): Promise<typeof Partner> {
    try {
      let createPartnerDto: CreatePartnerDto = plainToClass(CreatePartnerDto, partner)
      await validateOrReject(createPartnerDto)

      const newPartner = await this._partnerRepository.save(partner)

      return new Promise((resolve) => {
        resolve(newPartner)
      })
    } catch (e) {
      return new Promise((resolve) => {
        resolve(e)
      })
    }
  }
}
