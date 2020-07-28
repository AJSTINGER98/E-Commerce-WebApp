<template>
  <div style="padding:100px 0px">
      <div class="container fluid">
        <div class="row">
          <div class="col-md-6 d-none d-md-block"></div>
          <div class="col-12 col-md-6 justify-content-center">
            <div class="header">
              <h5 class="text-muted">GRAPHICS CARD</h5>
              <h1><strong>RTX 2080</strong> </h1>
              <h3>$ 2000</h3>
              <br>
              <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit saepe, asperiores molliti</p>
            </div>
            <br><br>
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
            <div class="row">
              <div class="col-4 justify-content-center">
                <div class="image">
                  <!-- <img src="../../assets/fast-delivery-small.png" alt=""> -->
                </div>
              </div>
              <div class="col-4"></div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      quantity: 1,
      qtymax : 20,
      qtymin : 1,
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
    }
  }
}
</script>

<style scoped>
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
    /* border: none; */
    /* outline: none; */
    font-size: 30px;
    text-align: center !important;
    max-width: 80%;
    max-height: 80%;

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
        padding:10px 60px ;
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