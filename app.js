const exp=require("express")
const app=exp()
app.get("/data",async (req,res)=>{
    res.send({status:true,message:"Got a scuss"})
})
app.listen(80,()=>{
    console.log(`server is running on port 8080`)
})
