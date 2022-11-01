const express = require("express")
const app = express()
const port = 3000;

app.listen(port)

function startserver(){
    console.log("Server is started");
}
function lw(request, response){
    response.send("<h2><u>hello how are you</u></h2>")
    console.log("lw started")
}
function homepage(request,response){
    response.sendFile(__dirname+"/home.html");
}

function getdata(request, response){
    let myx = request.query.x
    response.send("<h2><u>hello"+ myx + "</u></h2>")
    console.log("lw started")
}
app.get("/about",lw)
app.get("/home",homepage)
app.get("/data",getdata)
