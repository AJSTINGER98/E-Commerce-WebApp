<template>
  <div class="zoom-div">
      <div class="image-zoom">

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
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: cover;
        left: 0;
    }
</style>