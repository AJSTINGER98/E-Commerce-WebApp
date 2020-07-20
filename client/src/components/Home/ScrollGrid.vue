<template>
<div>
    <!-- for xs, sm -->
    
    <!-- For md, lg, xl -->
  <div v-scrollanimation class="background-div d-flex align-items-center justify-content-center">
      <div v-scrollanimation class="row">
          <div class="col-12 col-md-6 col-xl-4 text-container">
            <div class="scroll-bar"></div>
              <!-- <div class="scrollbar"></div> -->
              <div class="d-flex d-inline block mx-4 content justify-content-center" id="content1">
                  <div class="content-text ">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                  </div>
              </div>
              <div class="d-flex d-inline block mx-4 content justify-content-center" id="content2">
                  <div class="content-text ">
                      <h3>Our Promise, On Time Delivery</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                  </div>
              </div>
              <div class="d-flex d-inline block mx-4 content justify-content-center" id="content3">
                  <div class="content-text">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-6 col-xl-8 d-none d-md-block">
              <div class="d-flex justify-content-center align-items-center image-div h-100 w-100" >
                  <!-- <div class="img-container">
                  </div> -->
                <img class= "grid-image" src="../../assets/scroll-grid-img-1.png" id="image1" alt="">
                <img class= "grid-image" src="../../assets/scroll-grid-img-1.png" id="image2" alt="">
                <img class= "grid-image" src="../../assets/scroll-grid-img-1.png" id="image3" alt="">
              </div>
              <!-- <div class="d-flex justify-content-center align-items-center image-div " id="image1">
              </div> -->
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  
    methods:{
        animation(){
            
    
            new window.ScrollMagic.Scene({triggerElement:'.background-div',
                                            triggerHook: 'onLeave',
                                            duration:'2400'})
            .setPin('.background-div')
            // .addIndicators('scroll-div')
            .addTo(window.controller)
    
            //CONTENT 
            for(var i=0;i<3;i++){
                new window.ScrollMagic.Scene({triggerElement: `.background-div`,triggerHook:'onLeave',duration:'800',offset:`${i*800}`})
                .setClassToggle(`#content${i+1}`,'text-active')
                .setTween()
                // .addIndicators('Toggle-Text')
                .addTo(window.controller)
            }
    
            var tween1 = window.TweenMax.to('#image1',1,{opacity:0, y:'-100%'})
                        
            var tween2 = new window.TimelineMax()
                        .fromTo('#image2',1,{opacity: '0',y:'100%'},{opacity:1, y:'0%'})
                        .to('#image2',1,{opacity:0, y:'-100%'})
                        
            var tween3 = window.TweenMax.fromTo('#image3',1,{opacity: '0',y:'100%'},{opacity:1, y:'0%'})
    
    
            new window.ScrollMagic.Scene({triggerElement: '.background-div',triggerHook:'onLeave',duration:'600',offset: '200'})
            .setTween(tween1)
            // .addIndicators('image')
            .addTo(window.controller)
        
            new window.ScrollMagic.Scene({triggerElement: '.background-div',triggerHook:'onLeave',duration:'800',offset: '800'})
            .setTween(tween2)
            // .addIndicators('image')
            .addTo(window.controller)
    
            new window.ScrollMagic.Scene({triggerElement: '.background-div',triggerHook:'onLeave',duration:'600',offset: '1600'})
            .setTween(tween3)
            // .addIndicators('image')
            .addTo(window.controller)

            var tweenScroll = new window.TimelineMax()
                                .to('.scroll-bar',800,{y: '150%'})
                                .to('.scroll-bar',800,{y: '350%'})


            new window.ScrollMagic.Scene({triggerElement: '.background-div',triggerHook:'onLeave',duration:'2400'})
            .setTween(tweenScroll)
            .addTo(window.controller)
        },
        
     
    },
    
    mounted(){
        
        this.animation()
     
    }
}
</script>

<style scoped>
.before-enter{
  opacity:0;
  /* transform: translateX(-200px); */
  transition: all 2s ease-out
}

.enter{
  opacity:1;
  /* transform: translateX(0px); */
}
    
    .background-div{
        padding-top: 70px;
        max-width: 100vw;
        /* max-height: 100vh; */
        width: 100vw;
        height: 100vh;
        background-color: #222222;
        color : #6c757d;
        overflow: hidden;
        margin: 30px auto;
    
    }

    .text-container{
        padding: 0px 20px;
        /* margin-top:90px */

    }
    .content{
        /* margin-top: 20px;
        margin-bottom: 20px; */
        transform:scale(0.85);
    }

    p{
        margin:0;
    }
    .image-div{
        overflow: hidden;
        
    }

    .image-div img{
        position: absolute;
        top: 9vh;
    }

    @media screen and (max-width: 990px){

        .content{

            /* transform: scale(0.75); */
            margin-bottom: 20px;
        }
        .image-div img{
            top: 15vh;
        }
    }

    .grid-image{
        width: 100%;
        height: auto;
    }
    .text-active{
        color: white;
    }
    .content{
        transition: color 0.3s ease;
        margin-bottom:20px
    }
    .content-text{
        text-align: left;
    }
     .content-text:hover{
         color: white;
    }
    .scroll-bar{
        position: absolute;
        width: 3px;
        
        /* height: 20vh; */
        background-color: white;
        left: 3%;
        margin: 20px 5px;
        margin-left: 20px;
        height: 20%;
        border-radius: 5px 5px 5px 5px;
    }
</style>