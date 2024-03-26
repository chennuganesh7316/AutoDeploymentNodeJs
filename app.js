const exp=require("express")
const app=exp()
app.get("/TestHello",async (req,res)=>{
    res.send({status:true,message:"I have done autoDeployment using github actions in aws ec2"})
})
app.listen(80,()=>{
    console.log(`server is running on port 8080`)
})
