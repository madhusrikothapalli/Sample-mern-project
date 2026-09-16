let express=require('express');
let router=express.Router();
router.post("/register",(req,res)=>{
    res.send("Register  route");
});
router.post("/login",(req,res)=>{
    res.send("Login route");
});
router.get("/viewtasks",(req,res)=>{
    res.send("View tasks route");
});
router.put("/updatestatus",(req,res)=>{
    res.send("Update status route");
});
module.exports=router;