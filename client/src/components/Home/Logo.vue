<template>
  <div>
    <div id="clients">
         <div class="d-flex justify-content-center mt-0 pt-0 mb-4">
              <h6 class="text-secondary">Powered By:</h6>
          </div>
        <div class="clients-wrap">
          <ul id="clients-list" class="clearfix">
            <li><span><i class="fab fa-github fa-4x"></i></span></li>
            <li><span><i class="fab fa-css3 fa-4x"></i></span></li>
			<li><span><i class="fab fa-html5 fa-4x"></i></span></li>
          <li><span><i class="fab fa-vuejs fa-4x"></i></span></li>
			<li><span><i class="fab fa-google fa-4x"></i></span></li>
            <li><span><i class="fab fa-bootstrap fa-4x"></i></span></li>
            <li><span><i class="fab fa-vuejs fa-4x"></i></span></li>
			<li><span><i class="fab fa-google fa-4x"></i></span></li>
            <li><span><i class="fab fa-bootstrap fa-4x"></i></span></li>
			
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
window.$(function(){

  var $clientcarousel = window.$('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 400); // 140px width for each client item 
  $clientcarousel.css('width',clientwidth);
  
  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);
  
  window.$(document).on({
    mouseenter: function(){
      rotating = true; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#clients');
  
  function rotateClients() {
    if(rotating != false) {
      var $first = window.$('#clients-list li:first');
      $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
        $first.remove().css({ 'margin-left': '0px' });
        window.$('#clients-list li:last').after($first);
      });
    }
  }
});

    }
}
</script>

<style scoped>
/*Logo carousel*/
#clients {
	display: block;
	margin-left: auto;
	margin-right: auto;
}

#clients .clients-wrap {
	display: block;
	width: 95%;
	margin: 0 auto;
	overflow: hidden;
}

#clients .clients-wrap ul {
	display: block;
	list-style: none;
	position: relative;
	margin-left: auto;
	margin-right: auto;
}

#clients .clients-wrap ul li {
  display: block;
  float: left;
  position: relative;
  width: 220px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
#clients .clients-wrap ul li img {
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: 0 linear left;
  -moz-transition: 0 linear left;
  transition: 0 linear left;
  /* -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=65)"; */
  filter: alpha(opacity=65); 
  opacity: 0.65;
}
#clients .clients-wrap ul li img:hover {
  /* -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; */
  filter: alpha(opacity=100); 
  opacity: 1.0;
}

</style>