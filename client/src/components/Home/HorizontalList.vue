<template>
  <div class="py-4" id="horizontalListContainer">
        <div v-scrollanimation class="container d-flex text-center justify-content-center my-4 ">
            <h1>Our Latest Products</h1>
        </div>
        <!-- <div v-scrollanimation class="d-none d-md-block middle-btn">
            <button class="hello" style="--content: 'Drag to explore!';">
                <div class="left"></div>
                  Drag to explore! 
                <div class="right"></div>
            </button>
        </div> -->

        <div v-scrollanimation id="yourDiv" class="horizontal-scrollable my-4">
            <div class="d-flex w-100">
                <div  class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png" alt="Card image cap">

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
                <div v-scrollanimation class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png" alt="Card image cap">

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
                <div v-scrollanimation class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png" alt="Card image cap">

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
                <div class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png" alt="Card image cap">

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
                <div class="col-8 col-sm-6 col-md-4 col-xl-3 p-0 div-hover">

                    <div class="img-card w-100">
                        <img class="card-img" src="https://cnet1.cbsistatic.com/img/aJE3TOIiSEqz_oFN80Y_1dQ0ucg=/1092x0/2019/08/16/99be5eac-2d91-4011-8c5e-89f328d88e67/geforce-rtx-2080-ti-web-tech-shot-630-u2x.png" alt="Card image cap">

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
if(window.location.pathname == '/'){

    window.onload= function() {
        const slider = document.querySelector("#yourDiv");
        let isDown = false;
        let startX;
        let scrollLeft;
    
        slider.addEventListener("mousedown", e => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });
    
        slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
        });
    
        slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
        });
    
        slider.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
        })
    
    }
}
// Scroll Horizontally
    // function scrollHorizontally(e) {
    //     e = window.event || e;
    //     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //     document.getElementById('yourDiv').scrollLeft -= (delta*40); // Multiplied by 40
    //     e.preventDefault();
    // }
    // if (document.getElementById('yourDiv').addEventListener) {
    //     // IE9, Chrome, Safari, Opera
    //     document.getElementById('yourDiv').addEventListener("mousewheel", scrollHorizontally, false);
    //     // Firefox
    //     document.getElementById('yourDiv').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    // } else {
    //     // IE 6/7/8
    //     document.getElementById('yourDiv').attachEvent("onmousewheel", scrollHorizontally);
    // }

</script>

<style scoped>
    .btn:active,
    .btn:focus,
    .btn:focus:active {
     box-shadow: none;
    }
    
    .middle-btn{
        width:250px;
        margin: 0 auto;
    }
    .before-enter{
        opacity:0;
        /* transform: translateX(200px); */
        transition: all 2s ease-out
    }

    .enter{
        opacity:1;
        /* transform: translateX(0px); */
    }

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
        /* display: none; */
        height:5px;
        max-width:30px
    }
    /* .horizontal-scrollable::-webkit-scrollbar-thumb { */
        /* display: none; */
        /* background: linear-gradient(transparent, black);
        border-radius: 6px;
    } */
     .horizontal-scrollable::-webkit-scrollbar-thumb:hover {
        display: none;
        /* background: linear-gradient(transparent,#81f); */
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
        margin: 10px 10px;

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
        margin:10px 0px ;
        bottom: 0;
        padding: 2px;
        font-size: 2px;
        color: black;
        width:200px;
        min-width: 200px;
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

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200,900');

:root {
  --text-color: black;
  --shadow-color: hsla(210, 40%, 52%, .4);
  --btn-color: #81f;
  --bg-color: white
}

.hello {
  position:relative;
  padding: 10px 20px;  
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Source Code Pro";
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;  
  color: black;
  
  background-color: #81f;;
  /* box-shadow:  hsla(210, 40%, 52%, .4) 2px 2px 22px; */
  border-radius: 4px; 
  z-index: 0;  
  overflow: hidden;   
}

.hello:focus {
  outline-color: transparent;
  box-shadow: #81f 2px 2px 22px;
}

.right::after, .hello::after {
  content: var(--content);
  display: block;
  position: absolute;
  white-space: nowrap;
  padding: 40px 40px;
  pointer-events:none;
}

.hello::after{
  font-weight: 500;
  top: -30px;
  left: -20px;
} 

.right, .left {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.right {
  left: 66%;
}
.left {
  right: 66%;
}
.right::after {
  top: -30px;
  left: calc(-66% - 20px);
  
  background-color: white;
  color:transparent;
  transition: transform .4s ease-out;
  transform: translate(0, -90%) rotate(0deg)
}

.hello:hover .right::after {
  transform: translate(0, -47%) rotate(0deg)
}

.hello .right:hover::after {
  transform: translate(0, -50%) rotate(-7deg)
}

.hello .left:hover ~ .right::after {
  transform: translate(0, -50%) rotate(7deg)
}

/* bubbles */
.hello::before {
  content: '';
  pointer-events: none;
  opacity: .6;
  background:
    radial-gradient(circle at 20% 35%,  transparent 0,  transparent 2px, black 3px, black 4px, transparent 4px),
    radial-gradient(circle at 75% 44%, transparent 0,  transparent 2px, black 3px, black 4px, transparent 4px),
    radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, black 5px, black 6px, transparent 6px);

  width: 100%;
  height: 300%;
  top: 0;
  left: 0;
  position: absolute;
  animation: bubbles 5s linear infinite both;
}

@keyframes bubbles {
  from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
}
    
</style>