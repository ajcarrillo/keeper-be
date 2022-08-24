import { Handler } from "aws-lambda"
import { Client } from "./entities"
import { AppDataSource } from "../config/db/db"
import { RequestManager, RequestParameters } from "../common/utils/request-manager.utils"
import container from "../config/inversify.config"
import { ClientService } from "./client.service"
import { ResponseManager } from "../common/utils/response-manager.utils"

const service = container.get<ClientService>(ClientService)

export const all: Handler = async (event: any) => {
  const clients = await service.getAll()
  return ResponseManager.handleResponse(clients)
}

export const create: Handler = async (event: any) => {
  // const connection = await createConnection()
  // const client = new Client()
  // client.name = "Nest Pokemon"
  // client.contact = "Contact 1"
  // await connection.mongoManager.save(client)
  // await connection.close()
  //
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify(client, null, 2)
  // }
  //
  // return new Promise((resolve) => {
  //   resolve(response)
  // })

  // await AppDataSource.initialize()
  // console.log("Data Source has been initialized!")
  //
  //
  // const client = new Client()
  // client.name = "Nest Pokemon 1"
  // client.contact = "Contact 1"
  // client.email = "some email"
  // await AppDataSource.manager.save(client)

  const req: RequestParameters = RequestManager.getRequestParameters(event)
  const client = await service.create(req.body)
  return ResponseManager.handleResponse(client)

  // await AppDataSource.initialize()
  //
  // const client = new Client()
  // client.name = req.body.name
  // client.contact = req.body.contact
  // client.email = req.body.email
  // await AppDataSource.manager.save(client)
  //
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify(client, null, 2)
  // }
  //
  // return new Promise((resolve) => {
  //   resolve(response)
  // })

}
