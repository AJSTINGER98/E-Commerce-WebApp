var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const multer = require('multer');

const User = require('../models/user');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.post('/signup', (req, res) => {
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 10)
    });
    newUser.save((err,newUser) => {
      if (err) {
        return res.status(400).json({
          title: 'error',
          error: 'email in use'
        });
      }
      // console.log(newUser);
      let token = jwt.sign({ userId: newUser._id}, 'secretkey');
      return res.status(200).json({
        title: 'signup success',
        token:token
      });
    });
  });

router.post('/login', (req, res, next) => {

    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.status(500).json({
        title: 'server error',
        error: err
      });
      if (!user) {
        return res.status(401).json({
          title: 'user not found',
          error: 'invalid credentials'
        });
      }
      //incorrect password
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          title: 'login failed',
          error: 'invalid credentials'
        });
      }
      //IF ALL IS GOOD create a token and send to frontend
      let token = jwt.sign({ userId: user._id}, 'secretkey');
      return res.status(200).json({
        title: 'login success',
        token: token
      });
    });
  });
  
  //grabbing user info
router.get('/data', (req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      }); 
      // console.log(decoded);
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) 
          return console.log(err);
        else if(!user){
            return res.json({
              title: 'user not found',
              user : null
            });

        }

        return res.status(200).json({
          title: 'user grabbed',
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            address: user.address,
            image: user.userImage
          }
        });
      });
  
    });
  });


//editing user info
router.post('/image/upload', upload.single('file'),(req,res)=>{
  // console.log("HERE")
  var userId= mongoose.Types.ObjectId(req.headers._id); 
  // console.log(req.files,req.file,userId)
  // console.log(req.data,req.body.data)
  // console.log(req.file);
  // var newAddress={location: req.body.address[0], pincode:req.body.pincode,city:req.body.city,state:req.body.state}
  User.findOneAndUpdate({_id:userId},{$set: {userImage: req.file.path}},{safe:true, upsert:true},function(err, updatedUser){
    if(err || !updatedUser){
      console.log(err);
      return res.status(404);
    }
    else{
      console.log(updatedUser);
      return res.status(200);
    }
  });
});

router.post('/data/edit',(req,res)=>{
  console.log(req.body);
  var userId= mongoose.Types.ObjectId(req.headers._id); 
  User.findOneAndUpdate({_id:userId},{$set: {phone:req.body.phone, address:req.body.address}},{safe:true, upsert:true},function(err, updatedUser){
    if(err || !updatedUser){
      console.log(err);
      return res.status(404);
    }
    else{
      console.log(updatedUser);
      return res.status(200);
    }
  });

});


module.exports=router;