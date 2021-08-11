const express=require('express')
app=express()

app.get('',(req,res)=>{
    res.send("Homepage")//we just change the contents of res.send in normal cases 
    //because we don't want to send only normal strings when someone loads our webpage
})
app.get('/2ndPage',(req,res)=>{
    res.send('2nd Page')
})
app.get('/3rdPage',(req,res)=>{
    res.send('3rd Page')
})

app.listen(4000,()=>{
    console.log("The server is set up")
})