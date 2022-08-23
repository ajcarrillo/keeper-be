import { Handler } from "aws-lambda"

export const all: Handler = (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Get all clients",
        input: event,
      },
      null,
      2,
    ),
  }

  return new Promise((resolve) => {
    resolve(response)
  })
}
