import express, { json, urlencoded } from "express"
import cors from "cors"
import error from "./middlewares/error.js"

const app = express()

app.use(cors({
  origin: "*"
}))

app.use(json())

app.use(urlencoded({
  extended: true
}))

//routes


app.use(error)

export default app