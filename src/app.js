import express from "express"

const app = express()

app.use(express.json)

app.get("/", (req, res) => {
    res.json({ message: "Todo API is runnning"})
})

export default app