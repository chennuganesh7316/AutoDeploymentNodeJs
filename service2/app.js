const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"service 2 is implemented"})
})
app.post("/createUser",async (req,res)=>{
    res.send({status:true,message:"user created scussfully"})
})
app.listen(8080,()=>{
    console.log(`server is running 0 on port 8080`)
})
