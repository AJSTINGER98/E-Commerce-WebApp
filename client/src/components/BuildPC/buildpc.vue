<template>
  <div class="container-fluid w-100 mainDiv">
      <component :is="filterName" @change="filterName = $event"></component>
  </div>
</template>

<script>
import filter1 from './filter1.vue';
import filter2 from './filter2.vue';
import filter3 from './filter3.vue';


export default {
data(){
    return{
        filterName : 'filter1'
    }
},
components:{
    filter1,
    filter2,
    filter3
}
}
</script>

<style scoped>
    .mainDiv{
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 500px;
    }

</style>

