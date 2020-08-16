var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://pranav:pranav@tf.uvc9s.mongodb.net/";
//var url = "mongodb://localhost:27017/mydb";


  
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var query ={};
    // dbo.collection("products").deleteMany(query,function(err, result) {
    //   if (err) throw err;
    //   console.log('products deleted');

  //     data = [
  //       {
  //           image: [
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
    
              
  //           ],
  //           type: 'processor',
  //           brand: 'amd',
  //           name: 'ryzen',
  //           price: '2500',
  //           currency: '$',
  //           maxq : 15,
  //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti',
  //           keyFeatures:[
  //             {
  //               key: 'gpu architecture',
  //               value: 'TURING'
  //             },
  //             {
  //               key: 'boost clock',
  //               value: '1800 MHz (OC)'
  //             },
  //             {
  //               key: 'frame buffer',
  //               value: '8 GB GDDR6'
  //             },
  //             {
  //               key: 'memory speed',
  //               value: '14 GBPS'
  //             },
  //           ]
            
  //         },
  //         {
  //           image: [
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
    
              
  //           ],
  //           type: 'processor',
  //           brand: 'amd',
  //           name: 'ryzen',
  //           price: '2500',
  //           currency: '$',
  //           maxq : 15,
  //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti',
  //           keyFeatures:[
  //             {
  //               key: 'gpu architecture',
  //               value: 'TURING'
  //             },
  //             {
  //               key: 'boost clock',
  //               value: '1800 MHz (OC)'
  //             },
  //             {
  //               key: 'frame buffer',
  //               value: '8 GB GDDR6'
  //             },
  //             {
  //               key: 'memory speed',
  //               value: '14 GBPS'
  //             },
  //           ]
            
  //         },
          
  //         {
  //           image: [
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
    
              
  //           ],
  //           type: 'processor',
  //           brand: 'amd',
  //           name: 'ryzen',
  //           price: '2500',
  //           currency: '$',
  //           maxq : 15,
  //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti',
  //           keyFeatures:[
  //             {
  //               key: 'gpu architecture',
  //               value: 'TURING'
  //             },
  //             {
  //               key: 'boost clock',
  //               value: '1800 MHz (OC)'
  //             },
  //             {
  //               key: 'frame buffer',
  //               value: '8 GB GDDR6'
  //             },
  //             {
  //               key: 'memory speed',
  //               value: '14 GBPS'
  //             },
  //           ]
            
  //         },
          
  //         {
  //           image: [
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
  //             {
  //               src : 'https://i.ibb.co/Lh98zYN/ryzen-5-2600-4-removebg-preview.png',
                
  //             },
    
              
  //           ],
  //           type: 'processor',
  //           brand: 'amd',
  //           name: 'ryzen',
  //           price: '2500',
  //           currency: '$',
  //           maxq : 15,
  //           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti',
  //           keyFeatures:[
  //             {
  //               key: 'gpu architecture',
  //               value: 'TURING'
  //             },
  //             {
  //               key: 'boost clock',
  //               value: '1800 MHz (OC)'
  //             },
  //             {
  //               key: 'frame buffer',
  //               value: '8 GB GDDR6'
  //             },
  //             {
  //               key: 'memory speed',
  //               value: '14 GBPS'
  //             },
  //           ]
            
  //         },
          
          
         
  //       ];
        
  //       dbo.collection("products").insertMany(data,function(err, result) {
  //         if (err) throw err;
  //         console.log('products inserted');
  //         db.close();
  //       });


  //   });

    
  // });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    data=[{owner:"123456789"}]
    dbo.collection("orders").insertMany(data,function(err, result) {
              if (err) throw err;
              console.log('order inserted');
              db.close();
            });
  
    });