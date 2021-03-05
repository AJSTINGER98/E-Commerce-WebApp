<template>
    <div class="container">
        <div class="d-flex justify-content-center w-100">
            <div class="card-body"> <input type="range" class="custom-range" min="0" max="100" name="">
                <div class="form-row">
                    <div class="form-group col-md-6"> <label>Min</label> <input class="form-control" :placeholder="'$'+allPrice[0]" type="number"> </div>
                    <div class="form-group text-right col-md-6"> <label>Max</label> <input class="form-control" :placeholder="'$'+allPrice[allPrice.length-1]" type="number"> </div>
                </div> 
                <button class="btn-medium xs-margin-bottom-five">Next</button>
                <!-- <a class="btn" style="z-index:10000;">Apply Now</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

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