<template>
<div>
    <!-- for xs, sm -->
    <div class="small-container d-flex align-items-center justify-content-center" v-if="check">
        <div class="row align-items-center about-text">
            <div v-scrollanimation>
                <div class="col-12">
                <div class=" cont-1 align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
                <div class="col-12">
                  <div>
                    <img class="img-md"  src="../../assets/scroll-grid-img-1.png" alt="">
                  </div>
              </div>
            </div>
        <div v-scrollanimation>
        <div class="col-12">
              <div class="align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
          <div class="col-12">
              <div>
                <img class="img-md" src="../../assets/scroll-grid-img-1.png" alt="">
              </div>

          </div>
        
        </div> 
        <div v-scrollanimation>
            <div class="col-12 ">
              <div class="align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
          <div class="col-12 cont-2">
            <div>
                <img class="img-md" src="../../assets/scroll-grid-img-1.png" alt="">
              </div>
          </div>

        </div>
          
        </div>
    </div>
    <!-- For md, lg, xl -->
  <div class="background-div d-flex align-items-center justify-content-center" v-else>
      <div class="row">
          <div class="col-12 col-md-6 col-xl-4 text-container">
              <!-- <div class="scrollbar"></div> -->
              <div class="d-flex d-inline block mx-4 text-active justify-content-center" id="content1">
                  <div class="content-text w-75">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                  </div>
              </div>
              <div class="d-flex d-inline block mx-4 content justify-content-center" id="content2">
                  <div class="content-text w-75">
                      <h3>Our Promise, On Time Delivery</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                  </div>
              </div>
              <div class="d-flex d-inline block my-4 mx-4 content justify-content-center" id="content3">
                  <div class="content-text w-75">
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
    data(){
        return{
            window:{
                width: 0,
                height:0,
            }
        }
    },
    
    computed: {
        check() {
             return this.window.width < 768 ? true : false;
      }
    },
  
    methods:{
        windowSize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },

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
            //    var tween2 = window.TweenMax.fromTo('#image2',1,{opacity: '0',y:'100%'},{opacity:1, y:'0%',repeat:-1})
               
               var tween2 = new window.TimelineMax()
                            .fromTo('#image2',1,{opacity: '0',y:'100%'},{opacity:1, y:'0%'})
                            .to('#image2',1,{opacity:0, y:'-100%',delay:1})
               
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
            }
        
     
    },
    created(){
        window.addEventListener('resize',this.windowSize);
        this.windowSize();
    },
    mounted(){
        this.windowSize()
        this.animation()
     
    }
}
</script>

<style scoped>
    .before-enter{
    opacity:0;
    transform: translateY(200px);
    transition: all 1.2s ease-out
    }

    .enter{
        opacity:1;
    transform: translateY(0px);
    }
    .cont-1{
        margin-top: -60px
    }
    .cont-2{
        margin-bottom: -80px
    }
    .small-container{
        /* max-height:100%; */
        margin-top:100px;
        background-color: #222222;
        color: white;
        text-align:center;
        font-size: 18px 
    }
    .img-md{
        width:100%;
        height:auto;
        margin-top: 40px;
        margin-bottom:60px
    }
    .about-text{
        margin-top: 10px;
        margin-bottom: 10px;
        transform: scale(0.8)
    }
    .background-div{
        max-width: 100vw;
        max-height: 100vh;
        width: 100vw;
        height: 100vh;
        background-color: #222222;
        color : #6c757d;
        overflow: hidden;
    }
    .text-container{
        padding: 10px 20px;
    }
    .content:nth-child(2){
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .image-div{
        overflow: hidden;
        
    }

    .image-div img{
        position: absolute;
        top: 20vh;
    }

    @media screen and (max-width: 990px){

        .content{
            transform: scale(0.75);
        }
        .image-div img{
            top: 30vh;
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
    }
    .content-text{
        text-align: center;
    }
</style>