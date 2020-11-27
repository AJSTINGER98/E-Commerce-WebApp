<template>
 <div class="row posi" v-if="userFound">
        <div class="container d-block text-center justify-content-center my-4">
            <div class="p-0 w-100 mb-5" v-if="(orders.length > 0)">
                    <div v-for="(order,index) in orders" :key="index">
                    <hr v-if="index>0">
                    <div class="row my-2">
                        <h3></h3>
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
                            console.log(response.data)
                            this.orders = response.data.foundOrder ? response.data.foundOrder.items : [];
                            console.log("Orders", this.orders)
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

</style>