const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

app.use(express.static(path.join(__dirname, "../", "public")));


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"views", "home.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname,"views", "login.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname,"views", "register.html"));
});

app.post("/register", function(req, res){
    res.send("Usuario registrado");
});

app.post("/login", function(req, res){
    res.sendFile(path.join(__dirname,"views", "home.html"));
});


/*Heroku precisa que la línea del puerto sea la siguiente:*/

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000")
});

/*
app.listen(port, () => console.log("Servidor creado en el puerto " + port));
*/