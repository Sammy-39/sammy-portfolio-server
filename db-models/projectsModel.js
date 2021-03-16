const mongoose = require('mongoose')

const projectsSchema = new mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    githubURL: {
        type: String,
        require : true
    },
    deployURL: {
        type: String,
        require : true
    },
    desc: {
        type: String,
        require : true
    },
    keywords: [{
        type:String
    }],
    category : {
        type: String,
        require : true
    },
    image1: {
        type: String,
        require: true
    },
    image2: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model("Projects",projectsSchema)