import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
// import router from '@/router'
import AuthenticateUser from "../service/AuthenticatedUser";
const osdURL = "https://osd-capstone-1.onrender.com/";

export default createStore({
  state: {
    service_providers: null,
    service_provider: null,
    user: null,
    users: null,
    requested_services: null,

    // requested_services : null
  },
  getters: {},
  mutations: {
    setServiceProvider(state, value) {
      state.service_provider = value;
    },
    setServiceProviders(state, value) {
      state.service_providers = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setRequestedServices(state, value) {
      state.requested_services = value;
    },
  },
  actions: {
    async getService_Providers(context) {
      try {
        let { results } = (await axios.get(`${osdURL}service-providers`)).data;
        // console.log(results);
        if (results) {
          context.commit("setServiceProviders", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving SERVICE PROVIDERS.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async getServiceProvider(context, payload) {
      try {
        const result = (
          await axios.get(`${osdURL}service-providers/${payload.id}`)
        ).data;
        // console.log(result.result);
        if (result) {
          context.commit("setServiceProvider", result.result);
        } else {
          sweet({
            title: "Retrieving a service provider",
            text: "Service Provider was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while retrieving the service provider.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async getASingleUser(context, payload) {
      console.log("payload " + payload);

      try {
        const { results } = (await axios.get(`${osdURL}users/${payload}`)).data;
        console.log(results);
        if (results) {
          context.commit("setUsers", results.results);
        } else {
          sweet({
            title: "Retrieving a service provider",
            text: "Service Provider was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred while retrieving the service provider.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async registerUser(context, payload) {
      try {
        let result = await axios.post(`${osdURL}users/register`, payload);
        // console.log('result ->' + result.data);
        if (result) {
          context.commit("setUser", payload);
          sweet({
            title: "Success",
            text: "User registered successfully!",
            icon: "success",
            timer: 2000,
          });
        } else {
          sweet({
            title: "Error",
            text: "Failed to register user. Please try again.",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("Error during user registration:", error);
        sweet({
          title: "Error",
          text: "An error occurred during user registration.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async registerServiceProvider(context, payload) {
      try {
        let result = await axios.post(
          `${osdURL}service-providers/register-service-provider`,
          payload
        );
        // console.log('result ->' + result.data);
        if (result) {
          context.commit("setServiceProvider", payload);
          sweet({
            title: "Success",
            text: "SERVICE PROVIDER successfully!",
            icon: "success",
            timer: 2000,
          });
        } else {
          sweet({
            title: "Error",
            text: "Failed to register user. Please try again.",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("Error during user registration:", error);
        sweet({
          title: "Error",
          text: "An error occurred during user registration.",
          icon: "error",
          timer: 2000,
        });
      }
    },


    async getUserRequests(context, payload) {
      try {
        //  const {cookies} = useCookies()
        //  console.log(cookies.keys('LegitUser'));
        //  console.log(cookies.get('LegitUser'));

        //   let userId = cookies.get('LegitUser');
        //   console.log(userId.result.user_id);
        // console.log(payload);
        let { results } = (
          await axios.get(`${osdURL}user/${payload}/requested-services`)
        ).data;
        console.log(results);
        if (results) {
          context.commit("setRequestedServices", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving SERVICE PROVIDERS.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async getAllRequests(context) {
      try {
        let { results } = (await axios.get(`${osdURL}user`)).data;
        console.log(results);
        if (results) {
          context.commit("setRequestedServices", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving SERVICE PROVIDERS.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    
    async bookOrder(context, payload) {
      try {
        console.log('payload ->'+payload);
        let result = await axios.post(`${osdURL}user/add`, payload);
        // console.log('result ->' + result);
        if (result) {
          context.commit("setRequestedServices", payload);
          sweet({
            title: "Success",
            text: "User registered successfully!",
            icon: "success",
            timer: 2000,
          });
        } else {
          sweet({
            title: "Error",
            text: "Failed to register user. Please try again.",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("Error during user registration:", error);
        sweet({
          title: "Error",
          text: "An error occurred during user registration.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async loginUser(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${osdURL}users/login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { msg, result });
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, 
      ${result?.first_name} ${result?.last_name}`,
            icon: "success",
            timer: 5000,
          });
          // router.push({name: 'home'})
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 5000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 5000,
        });
      }
    },
    async loginServiceProvider(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${osdURL}service-providers/login`, payload)
        ).data;
        if (result) {
          context.commit("setServiceProvider", { msg, result });
          cookies.set("LegitServiceProvider", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, 
      ${result?.company_name} `,
            icon: "success",
            timer: 5000,
          });
          // router.push({name: 'home'})
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 5000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 5000,
        });
      }
    },
    async deleteSP(context, payload) {
      console.log(payload);
      try {
        const {results} = await axios.delete(`${osdURL}user/delete/${payload}`).data;
        console.log(results);
        if (results) {
          context.dispatch('setRequestedServices'); 
          sweet({
            title: 'Service Provider Deleted',
            text: results,
            icon: 'success',
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'Service Provider Deleted.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    
  },
  modules: {},
});
