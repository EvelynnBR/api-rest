import { Router } from "express"
import { productRoutes } from "./productsRoutes.js"

export const routes = Router()

routes.use("/products", productRoutes)