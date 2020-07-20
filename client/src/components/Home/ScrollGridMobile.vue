<template>
  <div class="small-container d-flex align-items-center justify-content-center" >
        <div class="row align-items-center about-text">
            <div v-scrollanimation>
                <div class="col-12">
                <div class=" cont-1 align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
                <div class="col-12">
                  <div>
                    <img class="img-md"  src="../../assets/scroll-grid-img-1.png" alt="">
                  </div>
              </div>
            </div>
        <div v-scrollanimation>
        <div class="col-12">
              <div class="align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
          <div class="col-12">
              <div>
                <img class="img-md" src="../../assets/scroll-grid-img-1.png" alt="">
              </div>

          </div>
        
        </div> 
        <div v-scrollanimation>
            <div class="col-12 ">
              <div class="align-items-center">
                      <h3>Our Moto, Customer Satisfaction</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores praesentium ipsa velit fuga eum. Architecto, fugiat ullam. Ducimus dolorem ab rerum ratione rem debitis</p>
                </div>
            
          </div>
          <div class="col-12 cont-2">
            <div>
                <img class="img-md" src="../../assets/scroll-grid-img-1.png" alt="">
              </div>
          </div>

        </div>
          
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .before-enter{
    opacity:0;
    transform: translateY(100px);
    transition: all 1.2s ease-out
    }

    .enter{
        opacity:1;
    transform: translateY(0px);
    }
    .cont-1{
        margin-top: -60px
    }
    .cont-2{
        margin-bottom: -80px
    }
    .small-container{
        /* max-height:100%; */
        margin-top:100px;
        background-color: #222222;
        color: white;
        text-align:center;
        font-size: 18px 
    }
    .img-md{
        width:100%;
        height:auto;
        margin-top: 40px;
        margin-bottom:60px
    }
    .about-text{
        margin-top: 10px;
        margin-bottom: 10px;
        transform: scale(0.8)
    }
</style>