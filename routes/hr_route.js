let express=require('express');
const{MongoDriveError}=require('mongodb');
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});
router.post("/assign-task",(req,res)=>{
    res.send("Assign task route");
});
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks route");
});
router.delete("/deleteEmp",(req,res)=>{
    res.send("Delete Employees route");
});
module.exports=router;