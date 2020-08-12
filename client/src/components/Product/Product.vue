<template>
<div v-if="products">
  <div class="row">
    <div class="col-md-3 col-sm-10 col-12 container-fluid mtt-100 pr-3 filter-parent"> 
     <div class="row d-flex justify-content-center left filter-div">
         <div class="col">
             <!-- <div class="sticky-top"> -->
             <div class="card">
                 <article class="filter-group">
                     <header class="card-header"> <a href="#" data-toggle="collapse" data-target="#collapse_aside1" data-abc="true" aria-expanded="false" class="collapsed"> <i class="icon-control fa fa-chevron-down"></i>
                             <h6 class="title">Categories </h6>
                         </a> </header>
                     <div class="filter-content collapse" id="collapse_aside1" style="">
                         <div class="card-body">
                             <ul class="list-menu">
                                 <li><a href="#" data-abc="true">Graphics Card </a></li>
                                 <li><a href="#" data-abc="true">Mouse & Keyboards </a></li>
                                 <li><a href="#" data-abc="true">Processor </a></li>
                                 <li><a href="#" data-abc="true">RAM</a></li>
                                 <li><a href="#" data-abc="true">Accessories </a></li>
                             </ul>
                         </div>
                     </div>
                 </article>
                 <article class="filter-group">
                     <header class="card-header"> <a href="#" data-toggle="collapse" data-target="#collapse_aside2" data-abc="true" aria-expanded="false" class="collapsed"> <i class="icon-control fa fa-chevron-down"></i>
                             <h6 class="title">Price </h6>
                         </a> </header>
                     <div class="filter-content collapse" id="collapse_aside2" style="">
                         <div class="card-body"> <input type="range" class="custom-range" min="0" max="100" name="">
                             <div class="form-row">
                                 <div class="form-group col-md-6"> <label>Min</label> <input class="form-control" placeholder="$0" type="number"> </div>
                                 <div class="form-group text-right col-md-6"> <label>Max</label> <input class="form-control" placeholder="$1,0000" type="number"> </div>
                             </div> 
                             <button class="btn-medium xs-margin-bottom-five">Apply Now</button>
                             <!-- <a class="btn" style="z-index:10000;">Apply Now</a> -->
                         </div>
                     </div>
                 </article>
                 <article class="filter-group">
                     <header class="card-header"> <a href="#" data-toggle="collapse" data-target="#collapse_aside3" data-abc="true" aria-expanded="false" class="collapsed"> <i class="icon-control fa fa-chevron-down"></i>
                             <h6 class="title">Brand </h6>
                         </a> </header>
                     <div class="filter-content collapse" id="collapse_aside3" style="">
                         <div class="card-body"> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> Nvidia </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> Logitech </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> Madz Catz </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> Steelseries </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> AMD </span> </label> </div>
                     </div>
                 </article>

             </div>
            <!-- </div> -->
         </div>
     </div>
 </div>
 <div class="col-md-9 container-fluid mt-100 right"> 
    <div class="row prod">
            <transition-group name='fade' tag="div" class="row prod">
                <div  class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover" v-for="(product,index) in products" :key="index">

                    <div class="img-card w-100">
                        <img class="card-img" :src="product.image[0].src" alt="Card image cap">

                    </div>
                    <div class="img-footer">
                        <div class="upper-div mx-0 ">
                            <a href="/product/id"> <button class="btn">VIEW</button></a>
                        </div>
                        <div class="lower-div mx-0 ">
                            <h6 class="mb-0 mt-1 text-muted">{{ product.name.toUpperCase()}}</h6>
                            <h5 class="mb-1 text-weight-bold">{{ product.currency }}{{product.price}}</h5>
                        </div>
                    </div>
                    
                </div>
            </transition-group>
                <br> <br>
                <infinite-loading @infinite="infiniteHandler" spinner="waveDots" class="d-flex w-100 justify-content-center">
                    <div class="text-red" slot="no-more"></div>
                    <div class="text-red" slot="no-results"></div>
                </infinite-loading>                           
            </div>
        </div>
  </div>
</div>
<!-- </div> -->
</template>

<script>

export default {
    data(){
        return{
            page: 1,
            products:[],
        };
    },
    // components: {
    //     infiniteLoading : InfiniteLoading,
    // },
    methods: {
        infiniteHandler($state) {
            setTimeout(() => {
                this.$http
                    .get(`${this.$api}products/`,{params: {page: this.page}})
                    .then(response => {
                       
                        if (response.data.allProducts && response.data.allProducts.length > 0) {
                            this.page += 1;
                            this.products.push(...response.data.allProducts);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                 });
            }, 1000);
        },
    },
    mounted(){

    },
    created(){

    }
}

</script>

<style scoped>
    
    .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition: opacity 0.5s ease;
    }


    .btn-medium:active,
    .btn-medium:focus,
    .btn-medium:focus:active {
     box-shadow: none;
     outline:none;
     /* border: none; */
    }
    .row{
        overflow:hidden
    }

    .right{
        padding-left:100px;
    }

    .container-fluid{
        margin-bottom:20px;
        /* min-height:100vh; */
    }
    .fix{
        /* display:flex; */
        /* float:left */
        margin-bottom: 150px;
    }

    .left{
        width:300px;
        /* margin-right:30px; */
    }
    .mt-100, .mtt-100 {
        margin-top: 150px;
        /* float:left; */
    }

    /* Sidebar Filters */

    .filter-group {
        border-bottom: 1px solid #e4e4e4
    }

 .card {
     position: relative;
     display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-orient: vertical;
     -webkit-box-direction: normal;
     -ms-flex-direction: column;
     flex-direction: column;
     min-width: 0;
     word-wrap: break-word;
     background-color: #fff;
     background-clip: border-box;
     border: 1px solid rgba(0, 0, 0, 0.1);
     border-radius: 0.37rem
 }

 .card-header {
     padding: 0.75rem 1.25rem;
     margin-bottom: 0;
     background-color: #fff;
     border-bottom: 1px solid rgba(0, 0, 0, 0.1)
 }

 .filter-group .card-header {
     border-bottom: 0
 }

 .icon-control {
     margin-top: 6px;
     float: right;
     font-size: 80%
 }
 .icon-control, .title{
     color:black
 }

 .list-menu {
     list-style: none;
     margin: 0;
     padding-left: 0
 }

 .list-menu a {
     color: #343a40
 }

 a {
     text-decoration: none !important;
     background-color: transparent;
     color:white
 }

 .checkbox-btn {
     position: relative
 }

 .checkbox-btn input {
     position: absolute;
     z-index: -1;
     opacity: 0
 }

 .checkbox-btn input:checked~.btn {
     border-color:black;
     background-color: black;
     color: #fff
 }

 .btn-light {
     display: inline-block;
     font-weight: 600;
     color: #343a40;
     text-align: center;
     vertical-align: middle;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
     background-color: #eee;
     border: 1px solid #eee;
     padding: 0.45rem 0.85rem;
     font-size: 10px;
     line-height: 1.5;
     border-radius: 0.37rem
 }

 .btn-light:hover {
     background-color: #fff;
     border-color: #989898
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

 .custom-control {
     position: relative;
     display: block;
     min-height: 1.5rem;
     padding-left: 1.5rem
 }

 /* Horizontal List */
 .d-flex{
        margin: 10px 20px;
    }
    
 .div-hover{
        /* max-width: max-content; */
        margin-bottom: 100px;

     } 
    .img-card {
        /* height: 50vh; */
        /* width: 100%; */
        height: 200px;
        /* min-width: 300px; */
        /* max-width: 350px; */
        width:70%;
        /* height:80%; */
        /* overflow: hidden; */
        cursor: pointer;
        padding-bottom: 10px;
    }
    .img-card img{
        margin: 0;
        padding: 0;
        height: auto;
        /* width: 100%; */
        transition: transform 1s ease-in-out;
    }
 
    .img-footer {
        /* width: 100%; */
        margin:40px 0 0 10px ;
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
        max-width:80%;
        position: relative;
        margin-top:-40px;
        margin-bottom:10px;
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
    .img-footer .upper-div .btn:hover {
        background-position: 100% 100%;
        color: black;
        animation: slide-in 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .div-hover:hover  .img-footer .upper-div{
        max-height: 60px;
    }
    /* .div-hover:hover .img-footer .lower-div{
        max-height: 0;
    } */

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

/* Media queries for responsiveness */
@media only screen and (max-width: 767px) {
  .mt-100 {
    /* background-color: lightblue; */
    margin-top:0px
  }
  .d-flex{
      display:block !important;
      margin-top:0
  }
  .div-hover{
      margin:0 auto;
  }
  .left{
      width:90%
  }
  img{
      width:70%;
      height: auto;
  }
  .div-hover{
      margin-bottom:60px;
  }
  .mtt-100{
      margin-bottom:60px;
  }
  .text-right{
      text-align:left!important
  }
} 
@media screen and (min-width: 768px) and (max-width: 960px) { 
    .right{
        padding-left:150px
    }
    .img-footer{
        margin-top:10px
    }
    .btn{
        width:70%;
        padding: 5px 5px 5px 5px !important;
        /* text-align:center; */
    }
}
@media screen and (min-width: 768px) and (max-width: 850px) { 
    .right{
        padding-left:180px
    }
}
@media only screen and (max-width: 512px){
    img{
      width:90%;
      height: auto;
  }
  .prod{
      margin-left:-60px;
  }
}
@media screen and (max-width: 400px) { 
    .img-footer{
        margin-top:10px
    }
}

@media screen and (min-width: 768px) { 
    .container-fluid{
    min-height: 100vh;
    }
    .filter-div{
        position:fixed;
    }

}

</style>