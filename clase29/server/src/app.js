import express from "express"
import cors from "cors"
import { usersRouter } from "./routes/users.routes.js"
import { orderRouter } from "./routes/orders.routes.js"
import { businesesRouter } from "./routes/busineses.routes.js"
import { options } from "./config/options.js"

const app= express()
const port = options.server.port

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use("/api/users",usersRouter)
app.use("/api/orders",orderRouter)
app.use("/api/busineses",businesesRouter)


app.listen(port,()=>{
    console.log("server runing on port ",port)
})