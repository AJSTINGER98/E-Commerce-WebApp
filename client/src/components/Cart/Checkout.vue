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
        </div>
    </div>
    <div v-else>
        <h1>Error:404 User not Logged. Please Login to Continue</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            userData: [],
            userFound: true,
            orderDetails:[]
        };
    },
    props:['orderData','paymentDetails','totalAmount'],

    computed:{
        ...mapGetters(['isAuthenticated','sendData']),
    },
    methods:{
        Buy(){
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
        var orderInfo = {
            orderDetails: this.orderDetails,
            orderData: this.orderData
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
     @keyframes slide-in {
        from {
            background-position: 50% 100%;
        }

        to {
            background-position: 0% 100%;
        }

    }
</style>