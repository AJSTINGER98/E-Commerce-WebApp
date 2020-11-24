const express      = require('express'),
          app      = express(),
      mongoose     = require("mongoose"),
      morgan       = require("morgan");
      cors         = require('cors');
      Razorpay     = require("razorpay");

      app.use(cors()); 

require('dotenv').config({ path: '.env' });

mongoURL = process.env.MONGOURL ||  "mongodb://localhost:27017/taknikki_factory";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex:true} );
app.set("view engine", "ejs");


// RAZORPAY INSTANCE
let instance = new Razorpay({
    key_id: 'rzp_test_bCnOnF4NXpGskM', // your `KEY_ID`
    key_secret: 'KCWzWfqFXeqBCFwo1V6rRaIU' // your `KEY_SECRET`
});


// SETUP BODY PARSER
app.use(express.json());

// Here setting extended to true allows body parser to convert the data of req.body into object and array form where necessary.
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));

//Requiring Routes
var homeRoutes= require("./routes/home");
var productRoutes = require("./routes/products");
var orderRoutes = require("./routes/order");
var userRoutes = require("./routes/user");
var paymentRoutes = require("./routes/payment");

app.use(homeRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/payment',paymentRoutes);




app.listen(process.env.PORT || 3000, (req,res) =>{
    console.log('Server Running on port 3000');
});