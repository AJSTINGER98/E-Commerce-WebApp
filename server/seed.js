var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://pranav:pranav@tf.uvc9s.mongodb.net/";
//var url = "mongodb://localhost:27017/mydb";


  
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var query ={};
  //   dbo.collection("products").deleteMany(query,function(err, result) {
  //     if (err) throw err;
  //     console.log('products deleted');

  //     data = [
  //       {
  //           image: [
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
                
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
                
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
                
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
               
  //             },
    
              
  //           ],
  //           type: 'graphics card',
  //           name: 'rtx 2080',
  //           price: '2000',
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
  //       {
  //           image: [
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
                
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-2'
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-3'
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-3'
  //             },
              
  //           ],
  //           type: 'graphics card',
  //           name: 'rtx 2080',
  //           price: '2000',
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
  //          {
  //           image: [
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-1'
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-2'
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-3'
  //             },
  //             {
  //               src : 'https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png',
  //               alt: 'image-3'
  //             },
    
  //           ],
  //           type: 'graphics card',
  //           name: 'rtx 2080',
  //           price: '2000',
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
  //         }
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
    data=[
      {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-minecraft-rtx-nv-sfg-295x166.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Minecraft with RTX'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/geforce-magma-nvidia-sfg-295x166.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Frames wins games.'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-laptop-refresh-2020-sfg-295x166@2x.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Titan V'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-gsync-nv-sfg-295x166.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Work. Play. Create.'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/apache-spark-3-sfg-295x166.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Gaming'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/ai-for-dev-recsys-sfg-295x166.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'Takniiki Factorry'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/nvidia-quadro-experience-sfg-295x166-dtm.jpg',
        content: 'The most powerful GPU ever created.',
        title: 'RTX Studio'
        },
    ]

    dbo.collection("news").insertMany(data,function(err, result) {
              if (err) throw err;
              console.log('news inserted');
              db.close();
            });
  
    });