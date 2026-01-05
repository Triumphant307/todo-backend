import express from 'express'

const router  = express.Router()

let todos = [
    {id: 1, title: "Learn Node.js", completed: false},
    {id: 2, title: "Build Todo APi", completed: false},
]

router.get("/", (req, res)=> {
    res.json(todos)
} )

router.get("/:id", (req, res) => {
    const { id } = req.params

    const todo = todos.find(t => t.id === Number(id))

    if(!todo) {
        return res.status(404).json({ error: "Todo not found"})
    }

    res.json(todo)
})

router.post("/", (req, res) => {
    const { title } = req.body

    if(!title) {
        return res.status(400).json({ message: "Title is required"})
    }

    const newTodo = {
        id: Date.now(),
        title,
        completed: false
    }

    todos.push(newTodo)

    res.status(201).json(newTodo)
})

export default router