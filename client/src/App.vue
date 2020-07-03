<template>
  <div id="#app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class= "{'bg-dark': hasScrolled,'bg-transparent' : !hasScrolled}">
      <a class="navbar-brand" href="#">Taknikki Factorry</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click=" checkScroll ? hasScrolled = !hasScrolled : hasScrolled = hasScrolled">
        <span class="navbar-toggler-icon"></span>
      </button>      

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="isModalVisible = true">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Login/SIgnUp Component -->
    <component :is="currentAuthPage" v-show="isModalVisible" @close="closeModal()" @change="currentAuthPage = $event"></component> 
    <home></home>
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
      hasScrolled : false,
      updateScroll : window.scrollY,
      isModalVisible : false,
      currentAuthPage : 'login'

    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  
  computed: {
    checkScroll(){
      return this.updateScroll < 100 ? true : false;
    }
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
    }
    
    
  },

  components: {
    home,
    login,
    signUp,
  }
}
</script>

<style scoped>
  .navbar{
    transition: background 0.5s;
  }
  .navbar .navbar-brand {
    margin-right: 20%;
    
  }

  .navbar ul li {
    padding-right : 50px;
  }

</style>
