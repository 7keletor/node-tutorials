const express= require('express')
const app=express()

// suppose we own the app.com domain and we have the following routes in it-
// app.com (the main page)
// app.com/help
// app.com/about

// How to set up our server to send a response when someone tries to get 
// something at a specific route??
// we set that up using a method on app-

app.get('',(req,res)=>{ //the first argument is the route, it is blank for homepgae
    res.send('<h1>Homepage</h1>')//the second argument is the handler (function to handle request)
})//sending html data

//the server is not up and running till line 15

app.get('/help',(req,res) => {
    res.send({
        name:'Andrew',
        age:27
    })
})

app.get('/about',(req,res)=>{
    res.send("About page")
})

app.get('/weather',(req,res)=>{
    res.send("Your Weather")
})

//in the next lines we start up the server
app.listen(5000 ,()=>{
    console.log("Server is up on port 5000")
})
//after this when we run the file our server will start and it will not give a new command prompt
//since its task is to stay up and running to process any incoming requests
//to stop the process and bring back the command prompt we will use ctrl+c
//after our server is up and running we can visit it in the browser using localhost:port no.