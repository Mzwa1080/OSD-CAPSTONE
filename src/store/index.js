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
    service_provider : null,
    user : null
    // requested_services : null
    // order_requests : null
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
    } ,
    // setRequestedServices(state,value){
    //   state.requested_services = value
    // }
  
  },
  actions: {
    async getService_Providers(context) {
      try{
        let {results} = (await axios.get(`${osdURL}service-providers`)).data
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
    async getServiceProvider(context, payload) {
      try {
        const result = (await axios.get(`${osdURL}service-providers/${payload.id}`)).data;
        // console.log(result.result);
        if (result) {
          context.commit('setServiceProvider', result.result);
        } else {
          sweet({
            title: 'Retrieving a service provider',
            text: 'Service Provider was not found',
            icon: 'info',
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred while retrieving the service provider.',
          icon: 'error',
          timer: 2000
        });
      }
    },

    async registerUser(context, payload) {
      try {
        let result = await axios.post(`${osdURL}users/register`, payload);
        // console.log('result ->' + result.data);
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
    async registerServiceProvider(context, payload) {
      try {
        const result = await axios.post(`${osdURL}service-providers/register-service-provider`, payload);
        console.log('sp ->' +result.data);
        if (result) {
          context.commit('setServiceProviders', result.data)
          sweet({
            title: 'Success',
            text: 'Service provider registered successfully!',
            icon: 'success',
            timer: 2000,
          });
        } else {
          sweet({
            title: 'Error',
            text: 'Failed to register service provider. Please try again.',
            icon: 'error',
            timer: 2000,
          });
        }
      } catch (error) {
        console.error('Error during service provider registration:', error);
        sweet({
          title: 'Error',
          text: 'An error occurred during service provider registration.',
          icon: 'error',
          timer: 2000,
        });
      }
    },

async getUserRequests(context, payload) {
  try {
    console.log(payload);
    const {results} = (await axios.get(`${osdURL}user/${payload}/requested-services`)).data;
    // const data = result.data; // Get the response data directly
    console.log('--->', results); // Log the data for debugging

    if (results) {
      context.commit('setUser', results); // Assuming setUser mutation updates the user state
    } else {
      sweet({
        title: 'Retrieving user requests',
        text: 'User requests were not found',
        icon: 'info',
        timer: 2000
      });
    }
  } catch (e) {
    console.error('Error retrieving user requests:', e);
    sweet({
      title: 'Error',
      text: 'An error occurred while retrieving user requests.',
      icon: 'error',
      timer: 2000
    });
  }
},


  },
  modules: {
  }
})
