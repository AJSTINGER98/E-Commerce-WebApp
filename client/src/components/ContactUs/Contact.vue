<template>
    <div class="row posi">
        <div class="container d-block text-center justify-content-center my-4 ">
            <h1>CONTACT US</h1>
            <!-- <br> <br> -->
            <h1>GET YOUR QUESTIONS ANSWERED</h1>
        </div>
        <div class="col-md-4 col-sm-6">
                <div class="card">
                    <div class="view overlay">
                        <img class="card-img-top" src="../../assets/support.png" alt="Card image cap">
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Support</h4>
                        <hr>
                        <!-- Text -->
                        <p class="card-text">Get help with our
                        products and services.</p>
                        <button class="btn" @click="show('support',support)">Get Support</button>

                     </div>
                   <transition name="slide-fade">
                     <div class="card-body" v-show="support">
                         <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        </form>
                     </div>
                   </transition>
                </div>
         </div>
         <div class="col-md-4 col-sm-6">
                <div class="card two">
                    <div class="view overlay">
                        <img class="card-img-top" src="../../assets/sales.png" alt="Card image cap">
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Sales</h4>
                        <hr>
                        <!-- Text -->
                        <p class="card-text">Connect with a Sales Representative</p>
                        <button class="btn" @click="show('sales', sales)">Contact Sales</button>
                     </div>
                     <transition name="slide-fade">
                     <div class="card-body"  v-show="sales">
                            <h1>Phone Number: 9123912391</h1>
                     </div>
                    </transition>
                </div>
         </div>
          <div class="col-md-4 col-sm-6">
                <div class="card">
                    <div class="view overlay">
                        <img class="card-img-top" src="../../assets/reach.png" alt="Card image cap">
                        <a>
                        <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">Reach out to us</h4>
                        <hr>
                        <!-- Text -->
                        <p class="card-text">Reach out to us for a better service.</p>
                        <button class="btn" @click="show('reach', reach)">Locate Us</button>

                     </div>
                      <transition name="slide-fade">
                      <div class="card-body"  v-show="reach">
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28011.80928971436!2d77.1237333451504!3d28.645458087439604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0304934fb67d%3A0x232534e44837b1bf!2sKirti%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1595249801833!5m2!1sen!2sin" width="350" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                     </div>
                      </transition>
                   
                     
                </div>
         </div>         
    </div>
</template>

<script>
export default {
    data(){
        return{
            support: false,
            sales: false,
            reach: false
        }
    },
    methods:{
        show(k,e){
            // console.log(k)
            if(k=="support"){
                this.support = !e;
            }
            else if(k=="sales"){
                this.sales = !e;
            }
            else if(k=="reach"){
                this.reach = !e;
            }

            // console.log(e)
        }
    }
    
}
</script>

<style scoped>
.map-responsive iframe{
    /* margin-left:-20px; */
}
    .posi{
        margin:100px 20px !important;
    }
    .card{
        border: none;
        background: none;
        text-align: center
    }
    .container{
        padding-bottom:20px
    }
    .card-img-top{
        width:180px;
        height:180px;
        margin: 0 auto; 
        /* text-align:center; */
    }
    .btn{
         border: 1px solid black;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;    
        color: white;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        padding:10px 60px ;
        border-radius: 0;
        /* width: 50%; */
        margin:0 auto;
        animation: slide-out 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .btn:hover {
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
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
</style>