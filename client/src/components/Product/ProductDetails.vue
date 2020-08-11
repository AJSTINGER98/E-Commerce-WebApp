<template>
  <div v-if="wait" style="padding-top: 50px ;overflow-x:hidden">
      <div class="main-container" style="overflow:hidden">
        <div class="row">
          <div class="carousel col-12 d-block d-md-none mt-3">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner" >

                    <div class="carousel-item" v-for="(image,index) in product.image" :key="index" :class="{'active' : index == 0}">
                      <img class="d-block w-100" :src="image.src" :alt="image.alt">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
          </div>
          <div class="image-container col-md-6 d-none d-md-block">
            
            <div class="inner-container container" v-for="(image,index) in product.image" :key="index">
              <img :src="image.src" 
                  class="w-100" :alt="image.alt">
            </div>
          </div>
          <div class="content-div container col-12 col-md-6 justify-content-center">
            <div class="header">
              <h5 class="text-muted">{{ product.type.toUpperCase()}}</h5>
              <h1><strong>{{ product.name.toUpperCase()}}</strong> </h1>
              <h3>{{ `${product.currency} ${product.price}` }}</h3>
              <br>
              <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti</p>
            </div>
            <br>
            <hr>
            <div class="d-flex justify-content-center">
              <div class="input-group d-flex justify-content-end w-100 my-4 mb-2 bg-white text-center align-items-center">
                <button class="btn w-100 py-2 h-75" id="addCartBtn"><i class="fas fa-shopping-cart fa-fw"></i> Add To Cart</button>
              </div>
              <div class="quantity-input d-flex justify-content-center my-4 mb-2 ml-2 mr-0 align-items-center">
                <input type="number" id="Quantity" v-model="quantity" max ="20" min="1">
              </div>
              <div class="justify-content-center py-1 my-4 align-items-center">
                <button id="Increment" @click="quantity < qtymax ? quantity++ : qtymax" class="btn counter-btn">&plus;</button>
                <button id="Decrement" @click="quantity > qtymin ? quantity-- : qtymin" class="btn counter-btn">&minus;</button>
              </div>

            </div>
            <br><br>
            <div class="d-flex row d-none d-sm-block justify-content-around">
              <div class="justify-content-center d-none d-sm-inline-block col-4">
                <div class="image-logo d-flex justify-content-center p-4">
                  <i class="fas fa-truck fa-3x"></i>
                </div>
                <div class="paragraph-logo py-2">
                  <p>FAST DELIVERY</p> 
                </div>
              </div>
              <div class="justify-content-center d-none d-sm-inline-block col-4">
                <div class="image-logo d-flex justify-content-center p-4">
                  <i class="far fa-check-circle fa-3x"></i>
                </div>
                <div class="paragraph-logo py-2">
                  <p class="pl-2">100% TRUST</p> 
                </div>
              </div>
              <div class="justify-content-center d-none d-sm-inline-block col-4">
                <div class="image-logo d-flex justify-content-center p-4">
                  <i class="fas fa-shield-alt fa-3x"></i>
                </div>
                <div class="paragraph-logo py-2">
                  <p>SECURE PAYMENT</p> 
                </div>
              </div>
            </div>
            <br><br>
            <hr>
            <div class="key-features">
              <h1>Key Features</h1>
              <div class="list">
                <ul>
                  <li v-for="(feature,index) in product.keyFeatures" :key="index"><i class="fas fa-check"></i> <strong>{{feature.key.toUpperCase()}}</strong> : {{feature.value}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//  import axios from 'axios';


export default {

  data(){
    return{
      wait: false,
      quantity: 1,
      qtymax : 20,
      qtymin : 1,
      product : {}
    };
  },

  watch:{
    quantity : function(){
      if(this.quantity > this.qtymax){
        this.quantity = this.qtymax;
      }
      else if(this.quantity < this.qtymin){
        this.quantity = this.qtymin;
      }
    },
    wait: function(){
      if(this.wait){
        this.animation()
        this.qtymax = this.product.maxq < 20 ? this.product.maxq : 20
      }
    },
  },
  methods:{
    animation(){
        if(window.innerWidth >= 768){
          // console.log("In animation")
        window.scene1 = new window.ScrollMagic.Scene({
          triggerElement:'.main-container',
          triggerHook:'onLeave',
          duration:1000*this.product.image.length})
          .setPin('.main-container')
          .addTo(window.controller);
        
        var yTrans = 100*(this.product.image.length-1);
        var tween1 = window.TweenMax.to('.image-container',1,{ y:`-${yTrans}%`})
    
        window.scene2 = new window.ScrollMagic.Scene({
          triggerElement:'.main-container',
          triggerHook:'onLeave',
          duration:1000*this.product.image.length
        })
        .setTween(tween1)
        .addTo(window.controller)
        // console.log("In animation")
      }
    },
  },
  created(){
    // console.log(this.product)
    this.$http
      .get(`${this.$api}products/nvidia/5f2bf6e03fbeaa7a274f0b27`)
      .then(response => {
        this.product =response.data.prodOne
        this.wait= true;
        this.$nextTick(() => this.animation());
         });
           this.qtymax = this.product.maxq < 20 ? this.product.maxq : 20
      }
  }
</script>

<style scoped>
/* CAROUSEL */
.carousel {
  width: 100%;
}
.carousel-control-prev{
  background: linear-gradient(90deg, rgba(52,51,51,1) 1%, rgba(81,79,79,1) 10%, rgba(255,251,251,0) 100%);
}
.carousel-control-next{
    background: linear-gradient(270deg, rgba(52,51,51,1) 1%, rgba(81,79,79,1) 10%, rgba(255,251,251,0) 100%);

}

/* IMAGE DIV */

.inner-container{
  height: 100vh;
  display: flex;
  align-items: center;
}

.image-container{
  margin-top: 50px;
  padding-top: 50px;
  justify-content: center;
  height: 100vh;
  /* overflow: hidden; */
}

/* CONTENT DIV */
  .content-div{
    transform: scale(0.8);
    overflow-y: scroll;
    height: 100vh; 
  }

.content-div::-webkit-scrollbar {
    width: 5px;
    background-color: white;
} 
.content-div::-webkit-scrollbar-thumb{
  background: black;
  border-radius: 100px;
}

@media screen and (max-width: 767px) {
  .content-div{
    height: auto;
    transform: scale(0.9);
    margin: auto auto;
  }
}


/* KEY FEATURES LIST */
  .key-feature h1{
    padding-left: 10px;
    font-weight: 700;
  }
  .list ul{
    list-style-type: none;
    padding: 0;
  }
  .list ul li{
    padding: 10px 0px;
  }

  /* LOGO STYLE */
  .image-logo{

    color: black;
    background: transparent;
    border:1px solid black;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  .paragraph-logo{
    text-align: center;
    position: absolute;
    left: 5px;
  }

  /* QUANTITY INPUT */
  #Quantity::-webkit-inner-spin-button, 
  #Quantity::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }

  .quantity-input{
    background: none;
    border:none;
    width: 80px;
    height: 80px;
  }

  #Quantity{
    background: #f2f2f2;
    border: none;
    outline: none;
    font-size: 30px;
    text-align: center !important;
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px #888888;

  }

  
  .counter-btn{
    background:transparent;
    outline: none;
    border: none;
    box-shadow: none;
    color:black;
    width: 20px;
    height: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 5px;
    padding: 0;
    text-align: center;
    align-items: center;

   
  }

  .counter-btn:focus:active {
    outline: none;
    border:none;
    box-shadow: none;
  }

  /* ADD TO CART BTN */
  #addCartBtn {
        border: 1px solid black;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;    
        color: white;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        /* padding:10px 60px ; */
        padding: 0;
        border-radius: 40px;
        /* width: 50%; */
        margin:0 auto;
        animation: slide-out 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    #addCartBtn:hover {
        background-position: 100% 100%;
        color: black;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
        @keyframes slide-in {
        from {
            background-position: 50% 100%;
        }

        to {
            background-position: 0% 100%;
        }

    }
    @keyframes slide-out {
        from {
            background-position: 100% 100%;
        }

        to {
            background-position: 50% 100%;
        }

    }

</style>