const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"service 1"})
})
app.post("/createUser",async (req,res)=>{
    res.send({status:true,message:"service 2"})
})
app.listen(8080,()=>{
    console.log(`server is running on port 8080`)
})
