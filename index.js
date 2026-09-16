let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
app.use("/api/hr",hrroutes);
app.use("/api/employee",emproutes);
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
