const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"code 1 backend services implemented changed    skjdskjkjsdjkjkbjksdbjkbsdsssss"})
})
app.post("/createUser",async (req,res)=>{
    res.send({status:true,message:"code 2 backend services implemented"})
})
app.listen(80,()=>{
    console.log(`server is  running on port 8080`)
})
