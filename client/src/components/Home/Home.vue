<template>
  <div>
    <!-- <carousel></carousel> -->
    <zoom-image></zoom-image>
    <homepage-brands></homepage-brands>
    <div class="container-fluid">
      <horizontal-list></horizontal-list>  
    </div>
    <div class="parallax">
      <news></news>
    </div>
    <home-div></home-div>
    <scroll-grid></scroll-grid>
    <alternate></alternate>
  </div>
</template>

<script>
import carousel from './Carousel.vue';
import zoomImage from './ZoomImage.vue';
import homepageBrands from './HomepageBrands.vue';
import horizontalList from './HorizontalList.vue';
import homeDiv from './HomeDiv.vue';
import alternate from './Alternate.vue';
import news from './News';
import scrollGrid from './ScrollGrid.vue'
export default {
    components: {
    // carousel,
    zoomImage,
    homepageBrands,
    horizontalList,
    homeDiv,
    alternate,
    news,
    scrollGrid
  }
}
</script>

<style scoped>

.parallax{
 /* The image used */
 background-image: url("../../assets/parallax.jpg");
 
 /* Set a specific height */
 min-height: 500px;
 min-width: 100%; 
 height: auto;
 /* Create the parallax scrolling effect */
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
 }

    
</style>