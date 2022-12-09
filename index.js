const express =  require("express");
const app= express();
const mongoose= require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/firstApp"); 
const uri="mongodb+srv://mrsantosh:mrsantosh@cluster0.sb1yadk.mongodb.net/userData?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}); 

const user_route=require("./routes/user_routes");

app.use(express.json());
app.use('/api',user_route);
const port=process.env.PORT||3000;

app.listen(port,function(){
    console.log("server ready");
});