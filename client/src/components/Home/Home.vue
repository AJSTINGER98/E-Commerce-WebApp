<template>
  <div>
    <carousel></carousel>
    <!-- <zoom-image :key= "window.width"></zoom-image> -->
    <!-- <homepage-brands></homepage-brands> -->
    <div class="container-fluid">
      <horizontal-list></horizontal-list>  
    </div>
    <div class="parallax">
      <news></news>
    </div>
    <!-- <home-div></home-div> -->
    <scroll-grid-mobile v-if="check"></scroll-grid-mobile>
    <scroll-grid v-else :key= "window.width"></scroll-grid>
    <!-- <alternate></alternate> -->
    <logo></logo>
  </div>
</template>

<script>
import carousel from './Carousel.vue';
// import zoomImage from './ZoomImage.vue';
// import homepageBrands from './HomepageBrands.vue';
import horizontalList from './HorizontalList.vue';
import homeDiv from './HomeDiv.vue';
import alternate from './Alternate.vue';
import news from './News';
import logo from './Logo';
import scrollGrid from './ScrollGrid.vue';
import scrollGridMobile from './ScrollGridMobile.vue'

export default {
   data(){
        return{
            window:{
                width: 0,
                height:0,
            }
        }
    },
    created(){
        window.addEventListener('resize',this.windowSize);
        this.windowSize();
    },
    mounted(){
      this.windowSize()
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
    },
    components: {
    carousel,
    // zoomImage,
    // homepageBrands,
    horizontalList,
    // homeDiv,
    // alternate,
    news,
    scrollGrid,
    logo,
    scrollGridMobile
  }
}
</script>

<style scoped>

.parallax{
 /* The image used */
 background-image: url("../../assets/parallax.jpg");
 
 /* Set a specific height */
 min-height: 800px;
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