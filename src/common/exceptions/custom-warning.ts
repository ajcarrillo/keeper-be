import { errorConstants } from "../helpers/error-constants"

export class CustomWarning {
  code: number
  message: string
  error: boolean

  constructor(description: string, message?: string, code?: number) {
    this.code = code || 409
    this.message = message || errorConstants.UNEXPECTED_ERROR
    this.error = true
  }
}
