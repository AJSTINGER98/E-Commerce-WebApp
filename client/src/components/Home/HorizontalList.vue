<template>
  <div class="py-4">
        <div class="container d-flex text-center justify-content-center my-4 ">
            <h1>FEATURED CATALOG</h1>
        </div>

        <div class="horizontal-scrollable my-4">
            <div class="d-flex w-100">
                <div class="col-8 col-sm-6 col-md-4 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="../../assets/try2.png" alt="Card image cap">

                    </div>
                    <div class="img-footer">
                        <div class="upper-div mx-0 ">
                            <button class="btn">VIEW</button>
                        </div>
                        <div class="lower-div mx-0 ">
                            <h6 class="mb-0 mt-1 text-muted">X-BOX CONTROLLER</h6>
                            <h5 class="mb-1 text-weight-bold">$ 50</h5>
                        </div>
                    </div>
                    
                </div>                
                <div class="col-8 col-sm-6 col-md-4 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="../../assets/try2.png" alt="Card image cap">

                    </div>
                    <div class="img-footer">
                        <div class="upper-div mx-0 ">
                            <button class="btn">VIEW</button>
                        </div>
                        <div class="lower-div mx-0 ">
                            <h6 class="mb-0 mt-1 text-muted">X-BOX CONTROLLER</h6>
                            <h5 class="mb-1 text-weight-bold">$ 50</h5>
                        </div>
                    </div>
                    
                </div>                
                <div class="col-8 col-sm-6 col-md-4 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="../../assets/try2.png" alt="Card image cap">

                    </div>
                    <div class="img-footer">
                        <div class="upper-div mx-0 ">
                            <button class="btn">VIEW</button>
                        </div>
                        <div class="lower-div mx-0 ">
                            <h6 class="mb-0 mt-1 text-muted">X-BOX CONTROLLER</h6>
                            <h5 class="mb-1 text-weight-bold">$ 50</h5>
                        </div>
                    </div>
                    
                </div>                
                <div class="col-8 col-sm-6 col-md-4 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="../../assets/try2.png" alt="Card image cap">

                    </div>
                    <div class="img-footer">
                        <div class="upper-div mx-0 ">
                            <button class="btn">VIEW</button>
                        </div>
                        <div class="lower-div mx-0 ">
                            <h6 class="mb-0 mt-1 text-muted">X-BOX CONTROLLER</h6>
                            <h5 class="mb-1 text-weight-bold">$ 50</h5>
                        </div>
                    </div>
                    
                </div>                
                
            </div>
        </div>
  </div>
</template>

<script>    
export default {
    data(){
        return{
           
        }
    },
    methods:{

    }
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
        margin: 50px 20px;
    }
    
    .div-hover{
        max-width: max-content;
        margin: 10px 5%;
    }
    .img-card {
        height: 50vh;
        width: 100%;
        min-height: 400px;
        min-width: 300px;
        max-width: 350px;
        overflow: hidden;
        cursor: pointer;
    }
    .img-card img{
        margin: 0;
        padding: 0;
        height: 80%;
        min-width: 100%;
        transition: transform 1s ease-in-out;
    }
    .div-hover:hover .img-card img{
        transform: scale(1.2);
    }
    
    .img-footer {
        width: 100%;
        margin: 0;
        bottom: 0;
        padding: 2px;
        font-size: 2px;
        color: black;
        min-width: 300px;
        max-width: 350px;
    }
    .upper-div{
        max-height: 0;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
    }
    .lower-div{
        max-height: 60px;
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
        padding:10px 30px ;
        border-radius: 0;
        width: 99%;
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

    
</style>