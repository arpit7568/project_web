const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get("/home",function(req,res){
    res.render("home.ejs");
})












app.listen(process.env.Port || 3000,function(){
    console.log("running");
});