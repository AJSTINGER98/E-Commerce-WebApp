<template>
    <div class="container">
        <div class="d-flex justify-content-center w-50">
            <p>$ {{ sliderVal }}</p>
            <div class="card-body"> <input v-model="sliderVal" type="range" class="custom-range" min="0" max="100000" name="">
                <button class="btn-medium xs-margin-bottom-five">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sliderVal: 0
        };
    },


}
</script>

<style>
    .btn-medium:active,
    .btn-medium:focus,
    .btn-medium:focus:active {
        box-shadow: none;
        outline:none;
        /* border: none; */
    }
     .btn-medium {
        font-size: 12px;
        padding:10px 60px ;
        display: inline-block;
        margin-right: 20px;
        letter-spacing: 2px;
        width: 100%;
        border: 1px solid black;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,0) 33.33%, rgba(0,0,0,1) 33.33%, rgba(0,0,0,1) 66.66%, rgba(0,0,0,0) 66.66%);
        background-size: 300%;
        background-position: 50% 100%;    
        color: white;
        transition: all 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        border-radius: 0;
        animation: slide-out 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .btn-medium:hover {
        background-position: 100% 100%;
        color: black;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

</style>