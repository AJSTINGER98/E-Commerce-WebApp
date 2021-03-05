<template>
 <div class="row posi">
        <div class="container d-block text-center justify-content-center my-4">
            <div class="p-0 w-100 mb-5" v-if="(orders.length > 0)">
                    <div v-for="(order,index) in orders" :key="index">
                    <hr v-if="index>0">
                    <h3 class="mb-5">Order Id: <strong>{{order.order.order_id}}</strong></h3>
                    <div class="row my-2" v-for="(item,ind) in order.items" :key="ind">
                        
                        <div class="image-container col-4 p-0">
                            <img class = "prod-image" :src="order.items[ind].image" alt="">
                        </div>
                        <div class="text-center w-50 m-auto">
                            <h5>
                             Name:  <router-link :to="{ name: 'productDetails', params: { id:order.items[ind].item_id }}"><strong>{{order.items[ind].name.toUpperCase()}}</strong></router-link>

                            </h5>
                            <h5>
                                Quantity: <strong>{{order.items[ind].quantity}}</strong>
                            </h5>
                            <h5>
                                Price: <strong>Rs {{order.items[ind].price.toLocaleString()}}</strong>
                            </h5>
                        </div>
                    </div>
                    </div>
                </div>
                <hr>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
     data(){
        return {
            orders : [],
            userId: null,
        };
    },
    computed : {
    ...mapGetters(['isAuthenticated','sendData']),
    },
    created(){
        this.userId = this.sendData ? this.sendData.id : null;
        console.log(this.userId)
        // this.wait = true;
        if(this.userId){
            this.$http.get(`${this.$api}payment/getorder`,{ headers: { _id: this.userId}})
                        .then(response =>{
                            console.log(response.data.data)
                            this.orders = response.data.data
                            console.log("Orders", this.orders[0].items[0].image)
                        })
                        .catch(error =>{
                            console.log(error);
                            this.order = [];
                        });
        }
    },

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