<template>
    <div>
        <div class= "parallax">
        <div class="container-fluid">
  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner row w-100 mx-auto">
      <div class="carousel-item col-md-3 active">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-minecraft-rtx-nv-sfg-295x166.jpg" alt="Card image cap">
          <div class="overlay">
                <div class="text">The most powerful GPU ever created.</div>
          </div>
        </div>
          <div class="card-body">
            <h4 class="card-title">Minecraft with RTX</h4>
            
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/geforce-magma-nvidia-sfg-295x166.jpg" alt="Card image cap">
          <div class="overlay">
                <span class="text">The most powerful GPU ever created.</span>
          </div>
        </div>
        <div class="card-body">
            <h4 class="card-title">Frames wins games.</h4>
        </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-laptop-refresh-2020-sfg-295x166@2x.jpg" alt="Card image cap">
          <div class="overlay">
                <span class="text">The most powerful GPU ever created.</span>
          </div>
        </div>
          <div class="card-body">
            <h4 class="card-title">Titan V</h4>
            
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-gsync-nv-sfg-295x166.jpg" alt="Card image cap">
          <div class="overlay">
                <div class="text">The most powerful GPU ever created.</div>
          </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Work. Play. Create.</h4>
            
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/apache-spark-3-sfg-295x166.jpg" alt="Card image cap">
          <div class="overlay">
                <div class="text">The most powerful GPU ever created.</div>
          </div>
        </div>
          <div class="card-body">
            <h4 class="card-title">Gaming</h4>
            
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/ai-for-dev-recsys-sfg-295x166.jpg" alt="Card image cap">
          <div class="overlay">
                <div class="text">The most powerful GPU ever created.</div>
          </div>
        </div>
          <div class="card-body">
            <h4 class="card-title">Takniiki Factorry</h4>
            
          </div>
        </div>
      </div>
      <div class="carousel-item col-md-3">
        <div class="card">
        <div class="zoom-effect-container">
          <img class="card-img-top img-fluid" src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/nvidia-quadro-experience-sfg-295x166-dtm.jpg" alt="Card image cap">
          <div class="overlay">
                <div class="text">The most powerful GPU ever created.</div>
          </div>
        </div>
          <div class="card-body">
            <h4 class="card-title">RTX Studio</h4>
            
          </div>
        </div>
      </div>
    </div> 
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    </div>
    </div>
  
</template>

<script>
export default {
    mounted(){
        window.$(document).ready(function() {
  window.$("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = window.$(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = window.$(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
         window.$(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          window.$(".carousel-item")
            .eq(i)
            .appendTo(window.$(this).find(".carousel-inner"));
        }
      }
    }
  });
    window.$(console.log("Hello"))
});

    }
}
</script>

<style scoped>
/* .zoom-effect-container{
  height
} */
.card-img-top {
  -webkit-transition: 1.6s ease;
  transition: 1.6s ease;
}

.zoom-effect-container:hover .card-img-top{
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
}

.overlay{
  position: relative;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */
  height: 68%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color:black;
 -webkit-transition: 1.6s ease;
  transition: 1.6s ease;
}

.zoom-effect-container:hover .overlay {
  /* visibility: visible; */
  opacity: 0.6;
   transform: scale(1.08);
     -webkit-transform: scale(1.08);
}

.text {
  /* visibility: hidden; */
  font-weight:700;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
/* .carousel-item{
    width:250px
}
.card-img-top{
    width:200px
} */
.carousel-control-prev{
    width:50px;
    color:black
}
.carousel-control-next{
    width:50px
}
.card-title{
    text-align:center
}
.card{
    border:none;
}
/* .parallax{ */
 /* The image used */
 /* background-image: url("../../assets/parallax.jpg"); */
 
 /* Set a specific height */
 /* min-height: 500px;
 min-width: 100%;  */
 
 /* Create the parallax scrolling effect */
 /* background-attachment: fixed; */
 /* background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 } */


@media (min-width: 768px) {
  /* show 4 items */
  .carousel-inner .active,
  .carousel-inner .active + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item,
  .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
    display: block;
  }

  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,
  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item,
  .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {
    transition: none;
  }

  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev {
    position: relative;
    transform: translate3d(0, 0, 0);
  }

  .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
    position: absolute;
    top: 0;
    right: -25%;
    z-index: -1;
    display: block;
    visibility: visible;
  }

  /* left or forward direction */
  .active.carousel-item-left + .carousel-item-next.carousel-item-left,
  .carousel-item-next.carousel-item-left + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item,
  .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
    position: relative;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  /* farthest right hidden item must be absolue position for animations */
  .carousel-inner .carousel-item-prev.carousel-item-right {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    visibility: visible;
  }

  /* right or prev direction */
  .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
  .carousel-item-prev.carousel-item-right + .carousel-item,
  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item,
  .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
    position: relative;
    transform: translate3d(100%, 0, 0);
    visibility: visible;
    display: block;
    visibility: visible;
  }
}
.carousel-item{
    margin-right:0
}
</style>