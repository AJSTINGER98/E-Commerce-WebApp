<template>
    <div class="main-div d-flex">
      <div v-scrollanimation class="container-fluid justify-content-center h-100">
        <!-- <div class="header w-100 my-4">
          <h1 class="text-center">Recent Updates</h1>
        </div> -->
        <div id="myCarousel" class="carousel slide h-100 w-100 my-auto" data-ride="carousel">
          <div class="carousel-inner row mx-auto">
            <transition-group :name="direction" class="w-100 h-100 d-flex justify-content-around align-items-center">
              <div class="carousel-item col-12 col-md-6 col-xl-4 active" v-for="i in currentItem" :key= "i">
                  <div class="card">
                  <div class="zoom-effect-container">
                    <img class="card-img-top img-fluid" :src="content[i].image" alt="Card image cap">
                    <div class="overlay">
                          <div class="text">{{ content[i].comment}}</div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">{{ content[i].title }}</h4>
                    </div>
                  </div>
                  </div>
              </div>
            </transition-group>    
          </div> 
          <a class="carousel-control-prev carousel-arrows" role="button" data-slide="prev" @click="slideLeft">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next carousel-arrows" role="button" data-slide="next" @click="slideRight">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-minecraft-rtx-nv-sfg-295x166.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Minecraft with RTX'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/geforce-magma-nvidia-sfg-295x166.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Frames wins games.'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-laptop-refresh-2020-sfg-295x166@2x.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Titan V'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/geforce-gsync-nv-sfg-295x166.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Work. Play. Create.'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/apache-spark-3-sfg-295x166.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Gaming'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/ai-for-dev-recsys-sfg-295x166.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'Takniiki Factorry'
        },
        {
        image:'https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/sfg/nvidia-quadro-experience-sfg-295x166-dtm.jpg',
        comment: 'The most powerful GPU ever created.',
        title: 'RTX Studio'
        },
      ],
      itemLength: 7,
      itemCount: 5,
      currentItem: [0,1,2,3,4],
      direction: 'left',
      interval: 7000
      
    }
  },

  methods: {
    slideLeft(){
      this.direction = 'left';
      var i = this.currentItem[0]-1
      if(i< 0){
        i = this.itemLength -1;
      }
      this.currentItem.pop();
      this.currentItem.unshift(i);

    },
    slideRight(){
      this.direction = 'right'
      var i = (this.currentItem[this.itemCount-1]+1)%this.itemLength;
      this.currentItem.shift();
      this.currentItem.push(i);
    }
  },

  mounted(){
    var vm = this;
    var myInterval= setInterval(()=>{
      vm.slideRight();
    },vm.interval);

    window.$('.carousel-arrows').click(()=>{
      clearInterval(myInterval);
      myInterval = setInterval(()=>{
        vm.slideRight();
      },vm.interval);
    });
  }
}
</script>

<style scoped>

.card{
    /* box-shadow: 0 4px 8px 0 white, 0 6px 12px 0 white; */
    border-radius:20px ;
    background:#f2f2f2;
}
.card-body{
    /* box-shadow: 0 4px 8px 0 white, 0 6px 12px 0 white; */
    border-radius:0 0 20px 20px;
    background:#f2f2f2;
}
.card-img-top{
  border-radius:20px 20px 0 0;
}

.before-enter{
  opacity:0;
  /* transform: translateX(-200px); */
  transition: all 2s ease-out
}

.enter{
  opacity:1;
  /* transform: translateX(0px); */
}

.card-body{
  background: transparent;
}


.overlay{
  position: absolute;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color:black;
 -webkit-transition: 0.9s ease;
  transition: 0.9s ease;
  border-radius: 20px;
}

.zoom-effect-container:hover .overlay {
  opacity: 0.7;

}
.zoom-effect-container:hover{
  transform: scale(1.08);
}
.zoom-effect-container{
  transition: transform 0.9s ease;
}

.text {
  font-weight:700;
  width:75%;
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.carousel-control-prev, .carousel-control-next{
    position: absolute;
    width:30px;
    top: 0;

}
.carousel-control-prev{
  left: 0;
}

.card-title{
    text-align:center
}
.card{
    border:none;
}

.card-body {
  background-color: #f2f2f2;
}




.carousel-item{
    margin-right:0;
    
}

/* VUE TRANSITION */

.main-div{
  height: 600px;
  min-height: 100%;
  padding-top: 10px;
  background-color: rgb(0,0,0,0.7);
  align-items: center;
}

.row{
  display: flex;
  height: 100%;
  justify-content: center;
  width: 90%;
}

.left-enter-active{
  transition: all 0.9s ease;
  transform: translateX(0%);
  
}

.left-leave-active{
  transition: all 0.9s ease;
  position: absolute;
  transform: translateX(400%);
  
}

.left-enter{
  visibility: hidden;
  transform: translateX(-200%);
  
}
.left-leave-to {
  visibility: hidden;
  position: absolute;
  transform: translateX(500%);
  
}
.right-enter-active{
  transition: all 0.1s ease;
  transform: translateX(300%);
  
}


.right-leave-active{
  transition: all 0.9s ease;
  position: absolute;
  transform: translateX(-100%);
  
}

.right-enter{
  visibility: hidden;
  transform: translateX(100%);
}
.right-leave-to {
  visibility: hidden;
  position: absolute;
  transform: translateX(-300%);
}

.header h1{
  font-size: min(10vw, 4.5rem);
  padding: 0;
  font-weight: 700;
  letter-spacing: 1vw;
  border-bottom: 2px solid #f2f2f2;
  border-top: 2px solid #f2f2f2;
  /* width: max(5vw,50%); */
  width: 100%;
  color: #f2f2f2
}
.header{
  display: flex;
  justify-content: center;
  z-index: 999;
  transform: translateZ(20px);
}


</style>