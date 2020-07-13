<template>
  <div class="zoom-div">
      <div class="image-zoom">
          <div class="image-caption">
              <p class="image-caption-header">Inpired by Modern Technology</p>
              <p>Taknikki Factorry</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        var tween = window.TweenMax.to('.image-zoom',1,{scale:1});
        new window.ScrollMagic.Scene({ duration: 1000})
        .setTween(tween)
        .setPin('.zoom-div')
        .addTo(window.controller)
        var tween2 = window.TweenMax.to('.image-caption',1,{opacity:1,scale:1});
        var scene = new window.ScrollMagic.Scene({triggerElement: 'image-caption', offset: 200,duration: 500,})
        .setTween(tween2)
        .addTo(window.controller)
        
    }
}
</script>

<style scoped>
    .zoom-div{
        min-height: 100vh;
        width: 100vw;
    }
    .image-zoom{
        background-image: url("../../assets/zoom-img.jpeg");
        /* overflow: hidden; */
        min-height: 100vh;
        /* max-height: 100vh; */
        min-width: 100vw;
        width: auto;
        transform: scale(2.0);
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        left: 0;
    }

    .image-caption {

        color: white;
        width: 100%;
        height: 100vh;
        font-size: 30px;
        opacity: 0;
        transform: scale(1.5);
        padding-top: 40vh;
    }
    .image-caption p{
        text-align: center;
    }
    .image-caption-header{
        font-size: 50px;
    }
    @media screen and (max-width:768px){
        .image-caption{
            font-size: 20px;
        }
        .image-caption-header{
            font-size: 30px;
        }
        
    }
</style>