const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/reagionmortgagae')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    onlineid:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("user",userSchema)