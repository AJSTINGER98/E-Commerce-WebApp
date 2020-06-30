<template>
  <div>
        <div class="d-flex justify-content-center my-4 ">
            <h1>Featured Catalog</h1>
        </div>

        <div class="horizontal-scrollable mb-4">
            <div class="d-flex my-3">
                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-dark" style="">
                        <img class="card-img" src="../../assets/carousel-1.jpeg" alt="Card image cap">
                        <div class="card-footer">
                            <button class="btn btn-lg">View Product</button>
                            <h5 class="card-title">ITEM NAME</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-dark" style="">
                        <img class="card-img" src="../../assets/carousel-1.jpeg" alt="Card image cap">
                        <div class="card-footer">
                            <button class="btn btn-lg">View Product</button>
                            <h5 class="card-title">ITEM NAME</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-dark" style="">
                        <img class="card-img" src="../../assets/carousel-1.jpeg" alt="Card image cap">
                        <div class="card-footer">
                            <button class="btn btn-lg">View Product</button>
                            <h5 class="card-title">ITEM NAME</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-dark" style="">
                        <img class="card-img" src="../../assets/carousel-1.jpeg" alt="Card image cap">
                        <div class="card-footer">
                            <button class="btn btn-lg">View Product</button>
                            <h5 class="card-title">ITEM NAME</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card text-dark" style="">
                        <img class="card-img" src="../../assets/carousel-1.jpeg" alt="Card image cap">
                        <div class="card-footer">
                            <button class="btn btn-lg">View Product</button>
                            <h5 class="card-title">ITEM NAME</h5>
                            <p class="card-text"><strong>Rs. 500</strong></p>
                        </div>
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
    /* The heart of the matter */
    .horizontal-scrollable {
        height: 80%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    } 
          

    /* Hide scrollbar for Chrome, Safari and Opera */
    .horizontal-scrollable::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .horizontal-scrollable {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
     }

    .horizontal-scrollable .d-flex{
        margin-left: 50px;
        margin-bottom: 50px;
    }
    .horizontal-scrollable .d-flex .col-8 {
        margin-left: 30px;
        
    }
    .card {
        position: relative;
        background-color: #FFFFFF;
        height: 370px;
        margin: 10px;
        width: 100%;
        overflow: hidden;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
        transition: height 0.3s, box-shadow 0.3s,border 0.3s;
    }
    .card-img {
        margin: 0;
        padding: 0;
        height: 80%;
        min-width: 100%;
    }
    .card-footer {
        position: absolute;
        bottom: 0;
        border: hidden;
        background: transparent;
        width: 100%;
        padding: 10px 15px;
    }
    .card-title {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.7);
    }
    .card-text {
        font-size: 100%;
        color: black;
        transition: color 0.3s;
    }
    .card:hover .card-title {
        color: black;
    }

    .card:hover .card-text {
        color: #6a6456;

    }
    .card:hover .card-img {
        height: 410px;
        opacity: 0.3;
    }

    .card-img {
        transition: height 0.3s, opacity 0.3s;
    }

     .card:hover {
        cursor: pointer;
        height: 410px;
        box-shadow: 20px 20px 40px 0px rgba(0,0,0,0.5);
        border: #343a40 3px solid;
    }

    .btn {
        margin-bottom: 120px;
        margin-left: 10%;
        display: none;
        border: #343a40 3px solid;
        color: #343a40;
        font-weight: 900;
        transition: display 0.3s;
    }

    .card:hover .btn{
        display: block;
    }


</style>