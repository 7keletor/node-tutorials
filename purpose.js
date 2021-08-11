const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send("Welcome to the homepage")
})

app.get('/2ndpage', (req, res) => {
    res.send("Welcome to the second page")
})

app.listen(600, () => {
    console.log("The server is up on port 6000")
})