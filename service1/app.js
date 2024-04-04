const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"dev code is implemented for dev branch"})
})
app.post("/createUser",async (req,res)=>{
    res.send({status:true,message:"code 2 backend services implemented for"})
})
app.listen(80,()=>{
    console.log(`server is  running on port 8080`)
})
