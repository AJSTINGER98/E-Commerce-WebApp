<template>
    <div class="row posi">
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
        </div>
    </div>
</template>

<script>
export default {
    props:['orderData'],
created(){

    console.log(this.orderData)
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
</style>