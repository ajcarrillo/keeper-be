import { IsEmail, IsString } from "class-validator"

export class CreateClientDto {
  @IsString()
  name: string

  @IsString()
  contact: string

  @IsEmail()
  email: string
}
