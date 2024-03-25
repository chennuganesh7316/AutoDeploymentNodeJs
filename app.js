const exp=require("express")
const app=exp()
app.get("/hello",async (req,res)=>{
    res.send({status:true,message:"Got a scuss"})
})
app.listen(8080,()=>{
    console.log(`server is running on port 8080`)
})
