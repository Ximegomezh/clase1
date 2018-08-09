console.log("Buenas noches"); //escribe consola


var express= require("express");
var app= express();

app.get("/", function(req, res){

    res.send("Tengo hambre");

});

app.listen(3000, function(){
   
    console.log("Empezar");
    
});

app.get("/carpeta", function(req, res){

    res.send("Tengo mucha más hambre");

});