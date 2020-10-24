import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import Cookies from 'js-cookie';

Vue.use(Vuex);

export const store = new Vuex.Store({
 
  state: {
    user: null,
    token: null
  },
  getters:{
    isAuthenticated(state){
        // console.log(state);
        if(state.user != null && state.token != null){
            return true;
        }
        return false;
    },
    sendData(state){
        console.log(state.user);
        return state.user;
    },
    sendToken(state){
      return state.token;
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
  },
  plugins: [
    createPersistedState()
  ],
});