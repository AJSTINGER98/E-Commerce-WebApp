<template>
    <div class="row posi" v-if="userFound">
        <div class="container d-block text-center justify-content-center my-4">
            <div class="p-0 w-100" v-if="(orderData.length > 0)">
                    <div v-for="(order,index) in orderData" :key="index">
                    <hr v-if="index>0">
                    <div class="row my-2"  >
                        <div class="image-container col-4 p-0">
                            <img class = "prod-image" :src="order.image" alt="">
                        </div>
                        <div>
                            <h5>
                                Name: {{order.name.toUpperCase()}}
                            </h5>
                            <h5>
                                Quantity: {{order.quantity}}
                            </h5>
                            <h5>
                                Price: {{order.price}}
                            </h5>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="">
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
            userData: {},
            userFound: true
        };
    },
    props:['orderData','paymentDetails'],

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
            }
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        }
    },
    created(){

        if(this.isAuthenticated){
            this.userData = this.sendData
            this.useFound = true;
            console.log(this.userData);
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