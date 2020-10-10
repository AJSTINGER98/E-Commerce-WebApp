var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

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
      console.log(decoded);
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err);
        return res.status(200).json({
<<<<<<< HEAD
          name: user.name,
          email: user.email,
          id: user._id
        })
      })
=======
          title: 'user grabbed',
          user: {
            email: user.email,
            name: user.name
          }
        });
      });
>>>>>>> d2f2a797ad804aac1e55b5e0bb965887f53f7217
  
    });
  });

module.exports=router;