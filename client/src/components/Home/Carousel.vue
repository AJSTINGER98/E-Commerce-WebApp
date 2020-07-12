<template>
  <div>
    <div id="carousel-fade" class="carousel carousel-fade fix" data-ride="carousel" data-interval="5000">
    
    <div class="carousel-inner embed-responsive embed-responsive-16by9" role="listbox">
      <div class="carousel-item embed-responsive-item active">
        <img src="../../assets/1.jpg" alt="First slide image" class="img-fluid">
        <div class="carousel-caption d-none d-md-block">
          <h3>Inspired by the wilderness.
          designed in london in our own homes
          </h3>
          <p>Taknikki Factorry</p>
        </div>
      </div>

      <div class="carousel-item embed-responsive-item">
        <img src="../../assets/2.jpg" alt="Second slide image" class="img-fluid">
        <div class="carousel-caption d-none d-md-block">
          <h3>we've taken the great outdoors, indoors.</h3>
          <p>Taknikki Factorry</p>
        </div>
      </div>

      <div class="carousel-item embed-responsive-item">
        <img src="../../assets/3.jpg" alt="Third slide image" class="img-fluid">
        <div class="carousel-caption d-none d-md-block">
          <h3>by drawing inspiration from
            all the places we'd love to go</h3>
          <p>Taknikki Factorry</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carousel-fade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-fade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
  </div>
</template>

<script>  
export default {
  mounted(){

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fix{
  max-height:100vh
}
.carousel-item img{
  width: 100%;
  height: auto;
}

.carousel-item{
  transition: opacity ease-out 1.2s;
  overflow:hidden;
  height: 100vh;
  width: 100%;
  /* transform: scale(2.5); */

}
.carousel.carousel-fade .carousel-item {
    display: block;
    opacity: 0;
    transition: opacity ease-out 1.2s;
}

.carousel.carousel-fade .carousel-item.active {
    opacity: 1 !important;
}

</style>
