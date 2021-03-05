<template>
    <div class="mtt-100">
        <div class="row mb-2 ">
            <div class="col-12 d-flex justify-content-center">
                <h2 class="mb-2"> Step:2 Choose your platform </h2>
            </div>

        </div>
        <div class="row">
            <div class="col-8 mb-5 ">
                <button class="btn float-right" @click="$emit('change','filter3')">Next</button>
            </div>

        </div>
        <!-- <div class="card-wrapper">
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
         -->
         <div class="row d-flex justify-content-center">
            <div class="col-2">
                <div class="card">
                    <img class="card-img-top bg-success" src="https://www.themvp.in/image/catalog/amd_icon.png" alt="Card image cap">
                    <div class="card-body text-center">
                    <p class="card-text">AMD</p>
                </div>
                </div>
            </div>
            <div class="col-2">
                <div class="card">
                    <img class="card-img-top bg-primary" src="https://www.themvp.in/image/catalog/intel_icon.png" alt="Card image cap">
                    <div class="card-body text-center">
                    <p class="card-text">Intel</p>
                </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mtt-100 {
        margin: 150px 200px;
        /* margin-left:400px; */
        /* float:left; */
    }

.card{
    background:transparent;
    border:none;
}
.card-body{
        padding: 1rem;
}
.btn {
        border: 1px solid black;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;    
        color: white;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        padding:10px 60px ;
        border-radius: 0;
        /* width: 10%; */
        margin:0 auto;
        animation: slide-out 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .btn{
        height:40px;
        text-align:center;
        /* width:100px; */

    }
    .btn:hover {
        background-position: 100% 100%;
        color: black;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .card-img-top{
        min-height: 100px;
        /* min-width: 100px; */
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
.btn:active,
.btn:focus,
.btn:focus:active {

  box-shadow: none;
}
</style>