<template>
    <div class="container d-flex justify-content-center">
        <div class="card-wrapper">
            <div class="img-card w-100">
                        <img class="card-img" :src="product.image[0].src" alt="Card image cap">

            </div>
            <div class="img-footer">
                <div class="upper-div mx-0 w-100 justify-content-center ">
                    <router-link :to="{ name: 'productDetails', params: { id:product._id }}"> <button class="btn">VIEW</button></router-link>
                </div>
                <div class="lower-div mx-0 ">
                    <h6 class="mb-0 mt-1 text-muted">{{ product.brand.toUpperCase()}}</h6>
                    <h6 class="mb-0 mt-1 text-muted">{{ product.name.toUpperCase()}}</h6>
                    <h5 class="mb-1 text-weight-bold">{{`${product.currency} ${product.price}`}}</h5>
                </div>
            </div>        
        </div>
        <div class="card-wrapper">
            <input type="checkbox" name="" id="">
            <div class="img-card w-100">
                        <img class="card-img" :src="product.image[0].src" alt="Card image cap">

            </div>
            <div class="img-footer">
                <div class="upper-div mx-0 w-100 justify-content-center ">
                    <router-link :to="{ name: 'productDetails', params: { id:product._id }}"> <button class="btn">VIEW</button></router-link>
                </div>
                <div class="lower-div mx-0 ">
                    <h6 class="mb-0 mt-1 text-muted">{{ product.brand.toUpperCase()}}</h6>
                    <h6 class="mb-0 mt-1 text-muted">{{ product.name.toUpperCase()}}</h6>
                    <h5 class="mb-1 text-weight-bold">{{`${product.currency} ${product.price}`}}</h5>
                </div>
            </div>        
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    input[type = 'checkbox']{
        opacity: 0;
        position: relative;
    }

    .img-card {
        /* height: 50vh; */
        /* width: 100%; */
        height: 300px;
        /* min-width: 300px; */
        /* max-width: 350px; */
        width:70%;
        /* height:70%; */
        overflow: hidden;
        cursor: pointer;
        padding-bottom: 50px;
    }
    .img-card img{
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        transition: transform 1s ease-in-out;
    }
 
    .img-footer {
        /* width: 100%; */
        margin:10px auto ;
        bottom: 0;
        padding: 2px;
        font-size: 2px;
        color: black;
        width:200px;
        min-width: 200px;
        max-width: 350px;
        max-height:10px;
    }
    .upper-div{
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
    }
    .lower-div{
        max-height: 80px;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
    }
    .img-footer .upper-div .btn {
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
    .img-footer .upper-div .btn:hover {
        background-position: 100% 100%;
        color: black;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .div-hover:hover  .img-footer .upper-div{
        max-height: 60px;
    }
    .div-hover:hover .img-footer .lower-div{
        max-height: 0;
    }
</style>