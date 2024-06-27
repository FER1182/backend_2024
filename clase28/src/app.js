import express from "express"
const app= express()
const PORT = 8080

import conctactRouter from "./routes/contacts.router.js"

app.use(express.json())

app.use("/api/contacts",conctactRouter)


app.listen(PORT,()=>{
    console.log(`servidor conectado al puerto ${PORT}`)
})
