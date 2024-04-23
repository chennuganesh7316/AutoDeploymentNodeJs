const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"backend code is implemented using main branch"})
})
app.post("/createUserhg,async (req,res)=>{
    res.send({status:true,message:"code 2 backend services implemented"})
})
app.listen(80,()=>{
    console.log(`server is  running on port 8080`)
})
