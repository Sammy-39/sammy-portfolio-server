const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env.DBURL,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})

mongoose.connection.on('connected', ()=>{
    console.log("Connected to mongo successfully")
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection to mongo failed "+err)
})

mongoose.connection.on('disconnected', ()=>{
    console.log("Connection to mongo disconnected")
})

const gracefulExit = () => { mongoose.disconnect() }
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit)


const app = express()
app.use(cors())
app.use(express.static("public"))

const projectsRouter = require("./routes/projects")
app.use("/api",projectsRouter)


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Server running on http://localhost:"+port)
})



