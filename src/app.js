import express from "express"
import todoRoutes from './routes/todo.routes.js'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Todo API is runnning"})
})


app.use("/api/todos", todoRoutes)

export default app