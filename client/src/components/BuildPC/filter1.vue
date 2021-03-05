<template>
  <div class="row mtt-100">
      <div class="row mb-3">
          <div class="col-12">
                 <h2 class="mb-2"> Step:1 Choose the games you plan to play </h2>
          </div>
            <div class="col-12">
                            <p>Select upto 3 games you want your PC to support</p>
          </div>
          

      </div>
      <div class="row mt-5">
        <div class="col-12 mb-5 ">
            <button class="btn float-right" @click="$emit('change','filter2')">Next</button>
        </div>

      <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/game-step1/1%20Apex-230x230.jpg" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">Apex Legends</p>
        </div>
    </div>
    </div>
          <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/game-step1/2%20pubg-230x230.jpg" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">PUBG</p>
        </div>
    </div>
    </div>
          <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/game-step1/3%20Fortnite-230x230.jpg" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">Fortnite</p>
        </div>
    </div>
    </div>
          <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/build-game-pc/Game%2011%20-%20BO4-230x230.png" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">Black Ops 4</p>
        </div>
    </div>
    </div>
          <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/game-step1/9%20Battlefield%205-230x230.png" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">Battlefield V</p>
        </div>
    </div>
    </div>
          <div class="col-2">
        <div class="card">
        <img class="card-img-top" src="https://www.themvp.in/image/cache/catalog/game-step1/12%20Owerwatch-230x230.jpg" alt="Card image cap">
        <div class="card-body text-center">
        <p class="card-text">Overwatch</p>
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
            games: {}
        }
    }
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