let express=require('express');
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result=await users.find();
    res.send(result);
})
router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});
router.post("/assign-task",(req,res)=>{
    res.send("Assign task route");
});
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks route");
});
router.delete("/deleteEmp/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if (result){
        res.send("employeee delete successfully");
    }else{
    res.send("no user found");
    }
});
module.exports=router;