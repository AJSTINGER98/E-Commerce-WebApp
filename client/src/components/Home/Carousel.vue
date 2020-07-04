<template>
  <div>
    <div id="carousel-fade" class="carousel carousel-fade" data-ride="carousel" data-interval="5000">
    <!-- <ol class="carousel-indicators">
        <li data-target="#carousel-fade" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-fade" data-slide-to="1"></li>
        <li data-target="#carousel-fade" data-slide-to="2"></li>
    </ol> -->

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

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item img{
  width: 100%;
  height: auto;
}

.carousel-item{
  overflow:hidden;
  height: 100vh;
  width: 100%;
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
