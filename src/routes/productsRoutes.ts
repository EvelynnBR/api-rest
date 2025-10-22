import { Router } from "express"
import { middleware } from "../middlewares/middleware.js"
import { ProductsController } from "../controller/ProductsController.js"

const productsController = new ProductsController()

export const productRoutes = Router()

productRoutes.get("/", middleware, productsController.index)
productRoutes.post("/", middleware, productsController.create)