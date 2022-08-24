import { Header } from "./headers"

export type CommonResponse = {
  statusCode: number
  body: string
  headers: Header
}
