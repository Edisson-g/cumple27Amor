import express from "express"
import {fileURLToPath} from "node:url"
import {dirname,resolve} from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.static(resolve(__dirname,"public")))

app.get("/",function(req,res){
    res.sendFile(resolve(__dirname,"static/birthday-cake.html"))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


export default app