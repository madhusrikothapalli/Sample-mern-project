let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
app.use("/api/hr",hrroutes);
// app.get("/getStudents",(req,res)=>{
//     res.send("get students called");
// });
// app.post("/addStudent",(req,res)=>{
//     res.send("add student called");
// });
// app.put("/updateStudent",(req,res)=>{
//     res.send("put student called");
// });
// app.delete("/deleteStudent",(req,res)=>{
//     res.send("delete student called");
// });
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
