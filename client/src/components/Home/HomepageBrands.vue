<template>
  <div>
      <div class="text-dark bg-light py-4">
          <div class="d-flex justify-content-center mt-0 pt-0 mb-4">
              <h6 class="text-secondary">Powered By:</h6>
          </div>
          <div class="row d-flex justify-content-around">
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-github fa-4x"></i></span>
              </div>
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-css3 fa-4x"></i></span>
              </div>
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-vuejs fa-4x"></i></span>
              </div>
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-bootstrap fa-4x"></i></span>
              </div>
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-html5 fa-4x"></i></span>
              </div>
              <div class="d-flex justify-content-center">
                  <span><i class="fab fa-google fa-4x"></i></span>
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
    .row {
        margin: 40px 30px; 
    }
    @media screen and (max-width: 450px){
        i {
            font-size: 140%;
        }
    }
</style>