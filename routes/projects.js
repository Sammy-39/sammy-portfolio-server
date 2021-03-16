const express = require("express")
const Projects = require("../db-models/projectsModel")

const router = express.Router()

router.get("/projects", async (req,res)=>{
    try{
        const projects = await Projects.find()
        if(projects){
            res.status(200).json(projects)
        }
        else{
            res.status(404).json({
                message: "No data found!"
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Connection timeout!"
        })
    }
})

module.exports = router