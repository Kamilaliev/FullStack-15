import { dressController } from "../Controller/Controller.js";
import express from "express"


let route =  express.Router()

route.get("/",dressController.getAll)
route.get("/:id",dressController.getById)
route.delete("/:id",dressController.delete)
route.post("/",dressController.post)

export default route