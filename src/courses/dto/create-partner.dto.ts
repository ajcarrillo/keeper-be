import { IsString } from "class-validator"

export class CreatePartnerDto {
  @IsString()
  name: string
}
