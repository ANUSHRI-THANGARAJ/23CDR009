 const express=require("express")
 const cors=require("cors")
 const app=express()
 app.use(cors)
  
app.get("http://4.224.186.213/evaluation_service/notifications",(req,res)=>{
    res.json()
})
app.post("http://localhost:5173",(req,res)=>{
    res.json()
})
app.listen("/",(req,res)=>{
   console.log("hello")
})