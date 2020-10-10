import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  getters:{
    isAuthenticated(state){
        if(state.user != null && state.token != null){
            return true;
        }
        return false;
    },
    sendData(state){
        return state.user;
    }
  },
  mutations: {
    setData(state,payload){
        console.log("Inside login");
        state.user = payload.user;
        state.token = payload.token;
    },
    removeData(state){
        console.log(state,"Inside logout");     
        state.user = null;
        state.token = null;
    }
  }
});