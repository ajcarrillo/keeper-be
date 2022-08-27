import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  category: string

  @IsNotEmpty()
  @IsString()
  duration: number

  @IsBoolean()
  @IsOptional()
  has_certification: boolean

  @IsOptional()
  @IsString()
  certification: string

  @IsOptional()
  @IsString()
  partner
}
