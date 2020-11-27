<template>
    <div class="row posi" v-if="userFound">
        <div class="container d-block text-center justify-content-center my-4">
            <div class="p-0 w-100 mb-5" v-if="(orderData.length > 0)">
                    <div v-for="(order,index) in orderData" :key="index">
                    <hr v-if="index>0">
                    <div class="row my-2">
                        <div class="image-container col-4 p-0">
                            <img class = "prod-image" :src="order.image" alt="">
                        </div>
                        <div class="text-center w-50 m-auto">
                            <h5>
                             Name:  <router-link :to="{ name: 'productDetails', params: { id:order.item_id }}"><strong>{{order.name.toUpperCase()}}</strong></router-link>

                            </h5>
                            <h5>
                                Quantity: <strong>{{order.quantity}}</strong>
                            </h5>
                            <h5>
                                Price: <strong>Rs {{order.price.toLocaleString()}}</strong>
                            </h5>
                        </div>
                    </div>
                    </div>
                </div>
                <hr>
                <div class="my-3 d-flex justify-content-between mr-5 w-75 p-4">
                    <h4 class="">Total: <strong>Rs {{this.totalAmount.toLocaleString()}}</strong> </h4>
                      <button class="btn" @click="Buy()">Proceed to Buy</button>
                </div>
                
                <div class="container">
                    <h2 class="my-4">SELECT ADDRESS</h2>
                    <div class="row justify-content-start">
                        <div class="col-12 col-sm-6 col-lg-4 " style="cursor:pointer" v-for="(address,i) in userData.address" :key="i">
                            <input type="radio" :id="i" :value="address" v-model="selectedAddress">
                            <label class="w-100" :for="i" style="cursor:pointer">
                                <h5 class="w-100 text-left ml-4">{{address.location}},</h5>
                                <h6 class="w-100 text-left ml-4">{{ address.city}}</h6>
                                <h6 class="w-100 text-left ml-4">{{address.state}}</h6>
                                <h6 class="w-100 text-left ml-4">{{address.pincode}}</h6>             

                        </label>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h2 class="my-4">USE A DIFFERENT ADDRESS</h2>
                    <div class="w-100">
                        <button class="btn w-25 mb-4" @click="newAddressInput = !newAddressInput">
                            <span v-if="!newAddressInput"><i class="fas fa-plus"></i> New Address</span>
                            <span v-else><i class="fas fa-times fa-fw"></i>Close</span>
                        </button>
                    </div>
                </div>
                <transition name="slide-fade" >
                        <div class="row" v-show="newAddressInput">
                                <div class="col-12 col-md-6 input-group">
                                    <input type="text" class="w-100" required v-model="newAddressObj.location">
                                    <span class="bar w-100"></span>
                                    <label class="d-flex float-left ml-4 pl-3">Location</label>
                                </div>
                                <div class="col-12 col-md-6 input-group">
                                    <input type="text" class="w-100" required v-model="newAddressObj.city">
                                    <span class="bar w-100"></span>
                                    <label class="d-flex float-left ml-4 pl-3">City</label>
                                </div>
                                <div class="col-12 col-md-6 input-group">
                                    <input type="text" class="w-100" required v-model="newAddressObj.state">
                                    <span class="bar w-100"></span>
                                    <label class="d-flex float-left ml-4 pl-3">State</label>
                                </div>
                                <div class="col-12 col-md-6 input-group">
                                    <input type="text" class="w-100" required v-model="newAddressObj.pincode">
                                    <span class="bar w-100"></span>
                                    <label class="d-flex float-left ml-4 pl-3">Pincode</label>
                                </div>
                        </div>
                   </transition>
                
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            userData: [],
            userFound: true,
            orderDetails:[],
            selectedAddress: null,
            newAddressInput : false,
            newAddressObj :{
                location: null,
                city: null,
                state: null,
                pincode: null

            }
        };
    },
    props:['orderData','paymentDetails','totalAmount'],

    computed:{
        ...mapGetters(['isAuthenticated','sendData']),
    },
    methods:{
        Buy(){
            console.log(this.selectedAddress);
            var options = {
                "key": "rzp_test_bCnOnF4NXpGskM",  //Enter your razorpay key
                "currency": "INR",
                "name": "Taknikki Factorry",
                // "description": "Razor Test Transaction",
                "image": "https://previews.123rf.com/images/subhanbaghirov/subhanbaghirov1605/subhanbaghirov160500087/56875269-vector-light-bulb-icon-with-concept-of-idea-brainstorming-idea-illustration-.jpg",
                "order_id": this.paymentDetails.id,
                "handler": (response)=>{
                    this.orderDetails=response
                    this.saveData()
                    

                //     console.log(response)
                // alert(response.razorpay_payment_id);
                },
                prefill: {
                    contact: this.userData.phone,
                    email: this.userData.email,
                },
                theme: {
                    color: "#00ffff"
                }
            }
            var rzp1 = new window.Razorpay(options);

            rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
            });
            rzp1.open();


    },
    saveData(){
        if(this.newAddressInput){
            this.newAddressObj.pincode = parseInt(this.newAddressObj.pincode)
            this.selectedAddress = this.newAddressObj
        }
        var orderInfo = {
            orderDetails: this.orderDetails,
            orderData: this.orderData,
            orderAddress: this.selectedAddress
        }
        this.$http.post(`${this.$api}payment/saveorder`, orderInfo,{
             headers: { _id: this.userData.id}})
            .then(response =>{
                if(response.status==200){
                    // clear cart
                    this.$http.delete(`${this.$api}orders/clearcart` ,{headers: { _id: this.userData.id}})
                    .then(response=>{
                        if(response.status==200){
                            this.$router.push({name:'home'});
                        }
                    });
                    // redirect to homepage
                    // console.log(response)
                }
                else{
                    console.log("Something went wrong")
                }
        })
    }
  
    },
    created(){
        console.log(this.totalAmount)
        if(this.isAuthenticated){
            this.userData = this.sendData
            this.useFound = true;
            // console.log("User Details:"+this.userData.id);
            console.log(this.orderData)
        }else{
            this.userFound = false;
        }
        
    }
}
</script>

<style scoped>

    .prod-image{
        width: 80%;
        height: auto;
        display: flex;
        align-items: center;
    }
    .posi{
        margin-top:100px !important;
        margin-left: 20px;
        margin-right: 20px;
        /* margin-bottom: 100px; */ 
    }
    .btn {
        border: 1px solid black;
        border-radius: 0;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: white;
    }
    .btn:hover{

        background-position: 100% 100%;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        color: black;

    }
    input[type="radio"] + label{
        border: 1px solid #ccc;
        padding: 4px;
        border-radius: 4px;
    }
    input[type="radio"]:checked + label{
        border: 3px solid black;
    }
     @keyframes slide-in {
        from {
            background-position: 50% 100%;
        }

        to {
            background-position: 0% 100%;
        }

    }
    .input-group {
        position: relative;
        margin: 40px 0;
        display: flex;
        justify-content: center;
        width: 100%;
        background: transparent;

    }

    input[type="text"], textarea {
        font-size: 18px;
        padding: 10px 10px 10px 10px;
        display: block;
        width: 300px;
        border: none;
        border-radius: 10px;
    }

    input[type="text"]:focus, textarea:focus {
        outline: none;
    }

    input[type="text"] ~ label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        top: 10px;
        width:100%;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    input[type="text"]:focus ~ label,
    input[type="text"]:valid ~ label, 
    textarea:focus ~ label {
        top: -20px;
        font-size: 15px;
        color: blue;

    }

    .bar {
        position: relative;
        display:block;
        width:300px;
        background: blue;
        height:2px;
        border-radius: 10px;
        transform: scaleX(0);
        transition: all 0.3s ease;
    }


    input[type="text"]:focus ~ .bar,
    textarea:focus ~ .bar{
    /*   width: 50%; */
        transform: scaleX(0.967);
    }



    .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s ease;
    
    }
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateY(-30px);
        opacity: 0;
    }
</style>