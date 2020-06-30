const express = require('express'),
          app = express();
   bodyParser = require("body-parser"),
   mongoose   = require("mongoose")
   morgan = require("morgan");


mongoose.connect("mongodb://localhost:27017/taknikki_factory", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} )
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))

app.get('/', (req,res) =>{
    res.send('<h1>Hello World</h1>');
});

app.listen(process.env.PORT || 3000, (req,res) =>{
    console.log('Server Running on port 3000');
});