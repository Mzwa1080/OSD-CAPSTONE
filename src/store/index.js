import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
// import { useCookies } from 'vue3-cookies'
// const {cookies} = useCookies()
// import router from '@/router'
// import AuthenticateUser from '@/service/AuthenticateUser'
const osdURL = 'https://osd-capstone.onrender.com/'

export default createStore({
  state: {
    service_providers : null,
    service_provider : null,
    user : null
  },
  getters: {
  },
  mutations: {
    setServiceProvider(state, value) {
      state.service_provider = value
    }, 
    setServiceProviders(state, value) {
      state.service_providers = value
    },
    setUser(state,value){
      state.user = value
    }
  
  },
  actions: {
    async getService_Providers(context) {
      try{
        let {results} = (await axios.get(`${osdURL}service-providers`)).data
        console.log(results);
        if(results) {
          context.commit('setServiceProviders', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving SERVICE PROVIDERS.',
          icon: "error",
          timer: 2000
        }) 
      }
    },

    async registerUser(context, payload) {
      try {
        console.log(payload);
        let result = await axios.post(`${osdURL}users/register`, payload);
        if (result) {
          context.commit('setUser', payload);
          sweet({
            title: 'Success',
            text: 'User registered successfully!',
            icon: 'success',
            timer: 2000,
          });
        } else {
          sweet({
            title: 'Error',
            text: 'Failed to register user. Please try again.',
            icon: 'error',
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Error during user registration:', error);
        sweet({
          title: 'Error',
          text: 'An error occurred during user registration.',
          icon: 'error',
          timer: 2000,
        });
      }
    },
  

  },
  modules: {
  }
})
