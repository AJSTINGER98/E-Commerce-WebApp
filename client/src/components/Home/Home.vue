<template>
  <div>
    <carousel></carousel>
    <homepage-brands></homepage-brands>
    <div class="container-fluid">
      <horizontal-list></horizontal-list>  
    </div>
    <news></news>
    <home-div></home-div>
    <alternate></alternate>
  </div>
</template>

<script>
import carousel from './Carousel.vue';
import homepageBrands from './HomepageBrands.vue';
import horizontalList from './HorizontalList.vue';
import homeDiv from './HomeDiv.vue';
import alternate from './Alternate.vue'
import news from './News'
export default {
    components: {
    carousel,
    homepageBrands,
    horizontalList,
    homeDiv,
    alternate,
    news
  }
}
</script>

<style scoped>
    
</style>