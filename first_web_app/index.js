const express = require("express");

const app = express();

function hello(){
    console.log("Hello");
}

app.get("/",hello)

app.listen(3000);
