<template>
  <div>
    <carousel></carousel>
    <homepage-brands></homepage-brands>
    <div class="container-fluid">
      <horizontal-list></horizontal-list>  
    </div>
    <div class="parallax"></div>
    <home-div></home-div>
  </div>
</template>

<script>
import carousel from './Carousel.vue';
import homepageBrands from './HomepageBrands.vue';
import horizontalList from './HorizontalList.vue';
import homeDiv from './HomeDiv.vue';
export default {
    components: {
    carousel,
    homepageBrands,
    horizontalList,
    homeDiv
  }
}
</script>

<style scoped>
    .parallax {
    /* The image used */
    background-image: url("../../assets/parallax-1.jpeg");

      /* Set a specific height */
    min-height: 800px;
    min-width: 100%; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>