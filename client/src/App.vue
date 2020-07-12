<template>
  <div id="#app">
    <nav class="navbar navbar-expand-lg fixed-top" :class= "{'background-dark': hasScrolled,'bg-transparent' : !hasScrolled }">
      <a class="navbar-brand nav-header navbar-mobile" :class="{'nav-header-scroll': hasScrolled}"  href="#"><img src="./assets/nav-logo.png" alt="nav-logo"></a>
      <button :class="{'btn-open': isToggled}" class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="isToggled = !isToggled" >
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>      
      <!-- NAVBAR -->
      <div class="collapse navbar-collapse container" v-if="checkWidth">
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
            <div class="float-right dropdown-sign" :class="{'sidebar-dropdown-sign-active': toggleDropdown,'sidebar-dropdown-sign-inactive': !toggleDropdown}"> &#x2b; </div> 
            </a>
            <div class="dropdown-menu show" aria-labelledby="navbarDropdown" :class="{'sidebar-dropdown-active': toggleDropdown ,'sidebar-dropdown-inactive': !toggleDropdown}">
              <a class="dropdown-item py-2 px-4" href="#">ACTION</a>
              <a class="dropdown-item py-2 px-4" href="#">ANOTHER ACTION</a>
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
      if(window.scrollY > 1000){
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



  /* NAVBAR STYLING AND ANIMATION */
  .navbar{
    transition: background 0.5s;
    font-size: 15px;
    padding: 10px 0;
    /* max-height: 54px; */
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

  /* NAVBAR DROPDOWN ANIMATION */
  
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
  

  /* SIDEBAR STYLING AND ANIMATION */
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
    padding-top: 100px;
    opacity: 0.8;
    outline:none;
    max-width: 100vw;
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

  /* NAVBAR AND SIDEBAR COLOR TEXT SPACING */

  .nav-link {
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
  }

  /* SIDEBAR DROPDOWN ANIMATION */

  .sidebar-dropdown-active{
    max-height: 50vh;
    transition: max-height 1.2s ease-in-out;
  }
  .sidebar-dropdown-inactive{
    max-height: 0vh;
    transition: max-height 0.7s ease;
  }
  .sidebar .dropdown-menu {
    border-radius: 0;
    background: black;
    color: white;
    margin-right: 5px;
    padding: 0;
    overflow: hidden;
    height: auto;
    

  }




  .sidebar .dropdown-menu a{
    color: inherit;
  }


  .sidebar .dropdown-menu .dropdown-item:hover , .sidebar .dropdown-menu .dropdown-item:focus{
    background: white;
    color: black;
  }


/* NAVBAR LINK HOVER EFFECT */

  .nav-link span::after{
    content: '';
    display: block;
    width: 95%;
    height: 1.5px;
    background-color :white ;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    opacity: 0;
    
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover span:after {
    
    margin-top: 0;
    opacity: 1;
  }
  /* SIDEBAR LINK UNDERLINE  */

   .sidebar .nav-item::after{
    content: '';
    display: block;
    width: 95%;
    height: 1px;
    background-color :white ;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
    
  }

  .sidebar .nav-item:hover:after{
    transform: scaleX(1);
  }

  /* HAMBURGER DESIGN AND ANIMATION */
  .navbar-toggler{
    /* position: absolute; */
    color: white;
    min-width: 20px;
    min-height: 30px;
    z-index:999;
    outline: none;
    transform: scale(0.5);
    transform-origin: left;
    margin-left: 10px;

  }

  .hamburger{
    height: 45px;
    width: 60px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    margin: 0;
    padding: 0;
    background: white;
    border: none;
    /* border-radius: 9px; */
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  .hamburger span:nth-child(even){
    left: 50%;
    border-radius: 0 9px 9px 0;
  }
  .hamburger span:nth-child(odd){
    left: 0;
    border-radius: 9px 0 0 9px;
  }
  .hamburger span:nth-child(1),.hamburger span:nth-child(2){
    top: 0px;
  }
  .hamburger span:nth-child(3),.hamburger span:nth-child(4){
    top: 18px;
  }
  .hamburger span:nth-child(5) ,.hamburger span:nth-child(6){
    top: 36px;
  }
  
  .btn-open .hamburger span:nth-child(1),.btn-open .hamburger span:nth-child(6){
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .btn-open .hamburger span:nth-child(2),.btn-open .hamburger span:nth-child(5){
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .btn-open .hamburger span:nth-child(1){
    left: 9px;
    top: 7px;
  }
  .btn-open .hamburger span:nth-child(2){
    left: calc(50%-9px);
    top: 7px;
  }
  .btn-open .hamburger span:nth-child(3){
    left: -50%;
    opacity: 0;
  }
  .btn-open .hamburger span:nth-child(4){
    left: 100%;
    opacity: 0;
  }
  .btn-open .hamburger span:nth-child(5){
    left: 9px;
    top: 29px;
  }
  .btn-open .hamburger span:nth-child(6){
    left: calc(50%-9px);
    top: 29px;
  }

  /* NAVBAR LOGIN AND CART ICON  */
  .div-icons .icons{
    transition: transform 0.5s ease-out;
  }
  .div-icons .icons:hover{
    transform: scale(1.3);
  }

  /* STYLE DROPDOWN SIGN */
  .sidebar-dropdown-sign-inactive{
    position: absolute;
    font-size: 40px;
    right: 0;
    top: 0;
    margin-right: 15px;
    
    cursor:pointer;
    transition: all 0.4s ease-out;
    transform: rotate(0deg);
  }
  .sidebar-dropdown-sign-active{
    position: absolute;
    font-size: 40px;
    right: 0;
    top: 0;
    margin-right: 15px;
    cursor:pointer;
    transition: all 0.4s ease-out;
    transform: rotate(45deg);

  }


</style>
