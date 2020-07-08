<template>
  <div id="#app">
    <nav class="navbar navbar-expand-lg fixed-top" :class= "{'background-dark': hasScrolled,'bg-transparent' : !hasScrolled }">
      <a class="navbar-brand nav-header navbar-mobile" :class="{'nav-header-scroll': hasScrolled}"  href="#"><img src="./assets/nav-logo.png" alt="nav-logo"></a>
      <button v-show="!isToggled" class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="isToggled = true" style="transition all 0.5s">
        <span class="">&#9776;</span>
      </button>      
      <!-- NAVBAR -->
      <div class="collapse navbar-collapse container" :class="{'navbar-small' : hasScrolled,}" v-if="checkWidth">
        <ul class="navbar-nav mr-0 w-100 nav-body pt-1" >
          <li class="nav-item active">
            <a class="nav-link" href="#" selected><span> HOME</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>ABOUT</span></a>
          </li>
          <li class="nav-item dropdown show">
            <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button">
              DROPDOWN
            </a>
            <div class="dropdown-menu show" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">ACTION</a>
              <a class="dropdown-item" href="#">ANOTHER ACTION</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
              <a class="dropdown-item" href="#">SOMETHING ELSE</a>
            </div>
          </li>
          <div class="div-icons ml-auto d-flex d-inline-block">
            <li class="nav-item">
              <a class="nav-link icons" href="#" @click="isModalVisible = true"><i class="far fa-user fa-lg"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link icons" href="#"><i class="fas fa-shopping-cart fa-lg"></i></a>
            </li>
          </div>
        </ul>
      </div>
      
      <!-- SIDEBAR -->
      <div class="sidebar" :class="{'sidebar-active' : isToggled}"  v-else>
          <a href="javascript:void(0)" class="closebtn" @click="isToggled = false,handleScroll()">&times;</a>
          <ul class="navbar-nav w-100" >
          <li class="nav-item">
            <a class="nav-link" href="#" selected>HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> ABOUT</a>
          </li>
          <li class="nav-item dropdown show">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" @click="toggleDropdown = !toggleDropdown">
              DROPDOWN
            </a>
            <div class="dropdown-menu show" aria-labelledby="navbarDropdown" :class="{'sidebar-dropdown-active': toggleDropdown ,'sidebar-dropdown-inactive': !toggleDropdown}">
              <a class="dropdown-item py-2 px-4" href="#">ACTION</a>
              <a class="dropdown-item py-2 px-4" href="#">ANOTHER ACTION</a>
              <div class="dropdown-divider m-0"></div>
              <a class="dropdown-item py-2 px-4" href="#">SOMETHING ELSE HERE</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CART</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="isModalVisible = true">LOGIN</a>
          </li>
      
        </ul>
      </div>
    </nav>
    <!-- Login/SignUp Component -->
    <home :class="{'blur-effect' : isModalVisible}"></home>
    <component :is="currentAuthPage" v-show="isModalVisible" @close="closeModal()" @change="currentAuthPage = $event"></component> 
    <!-- Footer -->
<footer class="page-footer font-small special-color-dark pt-4">

  <!-- Footer Elements -->
  <div class="container">

    <!-- Social buttons -->
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>
    <!-- Social buttons -->

  </div>
  <!-- Footer Elements -->


</footer>
<!-- Footer -->
  </div>
</template>

<script>
import home from './components/Home/Home.vue';
import login from './components/Auth/Login.vue';
import signUp from './components/Auth/SignUp.vue';



export default {
  data (){
    return {
      toggleDropdown :false,
      hasScrolled : false,
      isToggled : false,
      updateScroll : window.scrollY,
      isModalVisible : false,
      currentAuthPage : 'login',
      window : {
        width : 0,
        height : 0
      }

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize',this.windowSize);
    this.windowSize();
    
  },
 
  methods: {
    handleScroll(){
      this.updateScroll = window.scrollY; 
      if(window.scrollY > 100){
        this.hasScrolled = true;
      } else{
        this.hasScrolled = false;
      }
    },
    closeModal() {
      this.isModalVisible = false;
      var vm = this;
      setTimeout(() => {
        vm.currentAuthPage = 'login';
      },1000)
    },
    windowSize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    
    
  },
  computed : {
    checkWidth() {
      return this.window.width > 990 ? true : false;
    },
  },

  components: {
    home,
    login,
    signUp,
  },
  mounted() {
  
  }
}
</script>

<style scoped>
  .navbar{
    transition: background 0.5s;
    font-size: 15px;
    padding: 10px 0;
    /*  */
    min-height:54px
  }

  .navbar ul li {
    padding-right : 50px;
  }
  .blur-effect {
    filter:blur(8px);
  }


  .nav-header {
    position: absolute;
    left: 47vw;
    padding-top: 40px;
    margin: 0;
    background-attachment: fixed;
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
  .nav-header-scroll{
    padding-top: 0;
    padding-top: 40px;
    transform: scale(0.8);
  }
  
  .background-dark {
    background-color: #222222;
    color: white;
    
  }
  

  @media screen and (max-width: 990px){
    .navbar-mobile {
      
      transform: scale(0.7);
      display: flex;
      left: 80%;
    
    }
  }

  
  .navbar-collapse .dropdown .dropdown-menu {
    border-radius: 0;
    background: white;
    color: black;
    margin-right: 5px;
    padding: 0;
    border-radius: 5px;
    max-height: 0;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    height: auto;
    visibility: collapse;
    
  }

  .navbar-collapse .dropdown:hover .dropdown-menu, .navbar-collapse .dropdown:focus .dropdown-menu{
    max-height: 100vh;
    visibility: visible;
    
  }

  .navbar-collapse .dropdown-menu .dropdown-item:hover , .navbar-collapse .dropdown-menu .dropdown-item:focus{
    background: black;
    color: white;
  }
  

  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    background: black;
    height: 100vh;
    width: 0;
    color: white;
    transition: width 0.5s ease-in-out 0.2s;
    overflow-x: hidden;
    z-index: 1;
    padding: 4px;
    margin: 0;
    padding: 0;
    opacity: 0.7
  }
  .sidebar-active {
    width: 350px;
  
  }
  .sidebar ul {
   
    margin-left: 5px;
  }
  .sidebar ul li {

    list-style-type: none;
    padding: 10px 5px;
    width: 100%;
  }

<<<<<<< HEAD
  /* .dropdown-menu {
    transition: all 0.3s ease;
=======

  .sidebar-dropdown-active{
    max-height: 50vh;
    transition: max-height 1.2s ease-in-out;
  }
  .sidebar-dropdown-inactive{
    max-height: 0vh;
    transition: max-height 0.7s ease;
  }
  .sidebar .dropdown-menu {
>>>>>>> ef530c343de2324280be66a4db209f9702a9d347
    border-radius: 0;
    background: black;
    color: white;
    margin-right: 5px;
    padding: 0;
    overflow: hidden;
    height: auto;
    

  }
  .dropdown-menu:focus {
	color: #fff;
	background-color: rgba(129,103,169,.6);
} */

  .sidebar .dropdown-menu a{
    color: inherit;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
  }



  .sidebar .dropdown-menu .dropdown-item:hover , .sidebar .dropdown-menu .dropdown-item:focus{
    background: white;
    color: black;
  }

  .sidebar .closebtn {
    color: inherit;
    position: relative;
    margin-right: 10px;
    float: right;
    font-size: 40px;
    text-decoration: none;
    padding-top: 4px;
    height: 10%;
  }


  .nav-link span::after{
    content: '';
    display: block;
    width: 95%;
    height: 1px;
    background-color :white ;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    opacity: 0;
    /* transform: scaleX(0); */
    transition: all 0.3s ease-in-out;
  }
  

  .nav-link:hover span:after {
    /* transform: scaleX(1); */
    margin-top: 0;
    opacity: 1;
  }

  .navbar-toggler span{
    color: white;
    width: 20px;
    height: 30px;
  }
  .div-icons .icons{
    transition: transform 0.5s ease-out;
  }
  .div-icons .icons:hover{
    transform: scale(1.3);
  }
</style>
