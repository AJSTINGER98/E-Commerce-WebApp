const express      = require('express'),
          app      = express(),
      mongoose     = require("mongoose"),
      morgan       = require("morgan");
      var cors = require('cors');

      app.use(cors()); 

require('dotenv').config({ path: '.env' });

mongoURL = process.env.MONGOURL ||  "mongodb://localhost:27017/taknikki_factory";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false} );
app.set("view engine", "ejs");

// SETUP BODY PARSER
app.use(express.json());

// Here setting extended to true allows body parser to convert the data of req.body into object and array form where necessary.
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));

//Requiring Routes
var homeRoutes= require("./routes/home");
var productRoutes = require("./routes/products");
var orderRoutes = require("./routes/order")

app.use(homeRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


app.listen(process.env.PORT || 3000, (req,res) =>{
    console.log('Server Running on port 3000');
});