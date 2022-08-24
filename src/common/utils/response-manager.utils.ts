import { CommonResponse, Header } from "../models"
import { CustomWarning } from "../exceptions/custom-warning"

export class ResponseManager {
  static handleResponse(body: any, warnings?: CustomWarning[]): CommonResponse {
    let customResponse: CommonResponse
    if (body) {
      // const bd: Body = { data: body };
      // if (warnings) {
      //   bd.warnings = warnings.map(m => { return { message: m.message, code: m.code }; });
      // }
      customResponse = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: ResponseManager.setHeaders(),
      }
    } else {
      customResponse = {
        statusCode: 204,
        body: "",
        headers: ResponseManager.setHeaders(),
      }
    }
    return customResponse
  }

  static detectError(e: any): any {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }

  private static setHeaders(): Header {
    return {
      "Content-Type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Headers":
        "timestamp,tz,tenant-id,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    }
  }
}
