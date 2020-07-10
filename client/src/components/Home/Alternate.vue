<template>
  <div>
    <section class="container-fluid px-0 overflow">
      <div v-scrollanimation
       class="row align-items-center content">
        <div  class="col-md-6 order-2 order-md-1 p-0 zoom-effect-container">
         <div class="image-card">
          <img class="img-fluid" src="https://www.amd.com/system/files/2020-05/473974-dell-g5-laptop-campaign-1260x709_1.jpg">
         </div>
        </div>
        <div class="col-md-6 text-center order-1 order-md-2 p-0">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 mb-5 mb-md-0">
              <h2>Taknikki Factorry</h2>
              <img class="img-fluid d-none d-lg-inline" src="">
               <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus quisquam consequuntur repudiandae libero cupiditate illum animi.  
               </p>
            </div>
          </div>
        </div>
      </div>

      <div v-scrollanimation class="row align-items-center content">
        <div class="col-md-6 text-center p-0">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 mb-5 mb-md-0">
              <h2>Taknikki Factorry</h2>
              <img class="img-fluid d-none d-lg-inline" src="">
               <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus quisquam consequuntur repudiandae libero cupiditate illum animi.  
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0 zoom-effect-container">
         <div class="image-card">
          <img class="img-fluid" id="try" src="https://www.amd.com/system/files/2020-04/461767_AAA_laptops_1260x709.jpg">
         </div>
        </div>
      </div>

      <div v-scrollanimation class="row align-items-center content ">
          <div class="col-md-6 order-2 order-md-1 p-0 zoom-effect-container">
              <div class="image-card">
            <img class="img-fluid" src="https://www.amd.com/system/files/2020-06/516203-terminator-key-art-thumbnail-1260x709.jpg">
            </div>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2 p-0">
            <div class="row justify-content-center">
              <div class="col-10 col-lg-8 mb-5 mb-md-0">
                <h2>Taknikki Factorry</h2>
                <img class="img-fluid d-none d-lg-inline" src="">
                 <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus quisquam consequuntur repudiandae libero cupiditate illum animi.  
                  </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>

.overflow{
  overflow:hidden
}
.image-card img {
  -webkit-transition: 2.6s ease;
  transition: 2.6s ease;

}
.zoom-effect-container:hover .image-card img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.zoom-effect-container{
     overflow: hidden
}

.before-enter{
  opacity:0;
  transform: translateY(200px);
  transition: all 1.2s ease-out
}

.enter{
    opacity:1;
  transform: translateY(0px);
}
</style>