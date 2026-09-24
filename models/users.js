let mongoose=require('mongoose');
let userschema=mongoose.Schema({
    nmae:String,
    email:{
        type:String,
        unquie:true
    },
    password:String,
    role:{
        type:String,
        enum:["HR","EMPLOYEE"]
    }
})
let users=mongoose.model('users',userschema);
module.exports={users}