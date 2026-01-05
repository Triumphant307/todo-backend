import app from "./app.js";

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server runnning on http://localhost:${PORT}`);
    
})