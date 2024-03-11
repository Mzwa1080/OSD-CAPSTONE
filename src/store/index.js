import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
// import { useCookies } from 'vue3-cookies'
// const {cookies} = useCookies()
// import router from '@/router'
// import AuthenticateUser from '@/service/AuthenticateUser'
const osdURL = 'https://osd-capstone-1.onrender.com/'

export default createStore({
  state: {
    service_providers : null,
    service_provider : null
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
  },
  modules: {
  }
})
