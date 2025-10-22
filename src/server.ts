import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes/index.js"
import { AppError } from "./utils/AppError.js"
import { ZodError } from "zod"

const PORT = 3333
const app = express()
app.use(express.json())

app.use(routes)

app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ messager: error.messager })
    }

    if (error instanceof ZodError) {
      return response
        .status(400)
        .json({ messager: "Validation error", issus: error.format() })
    }

    response.status(500).json({ message: "Erro no servidor!" })
  }
)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
