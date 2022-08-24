export class RequestParameters {
  body: any
  pathParameters: any
  queryStringParameters: any
}

export class RequestManager {
  static getRequestParameters(event: any): RequestParameters {
    const req = new RequestParameters()
    const { pathParameters = {} } = event
    const body = JSON.parse(event.body) ?? undefined
    const queryStringParameters = event.queryStringParameters ?? {}

    req.body = body
    req.pathParameters = pathParameters
    req.queryStringParameters = queryStringParameters

    return req
  }
}
