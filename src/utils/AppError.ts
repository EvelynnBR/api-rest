export class AppError{
  messager: string
  statusCode: number

  constructor(messager: string, statusCode: number= 400) {
    this.messager = messager
    this.statusCode = statusCode
  }
}