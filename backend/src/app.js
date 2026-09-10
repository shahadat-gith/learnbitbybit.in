import express, { json, urlencoded } from "express"
import cors from "cors"

const app = express()

app.use(cors({
  origin: "*"
}))

app.use(json())

app.use(urlencoded({
  extended: true
}))

//routes

export default app