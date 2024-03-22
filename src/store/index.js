import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from '@/router'
import AuthenticateUser from "../service/AuthenticatedUser";
const osdURL = "https://osd-capstone-1.onrender.com/";

export default createStore({
  state: {
    service_providers: null,
    service_provider: null,
    user: null,
    users: null,
    requested_services: null,
    admin: null, // Add admin state

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
    setAdmin(state, value) {
      state.admin = value;
    },
  },
  actions: {

    // ====   USERS ======
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

    
    async getUsers(context) {
      try {
        let { results } = (await axios.get(`${osdURL}users`)).data;
        // console.log(results);
        if (results) {
          context.commit("setUsers", results);
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



    async deleteSingleUser(context, payload) {
      // console.log(payload);
      try {
        const results = (await axios.delete(`${osdURL}user/${payload}/delete`)).data  ;
        // console.log(results);
        if (results) {
          context.dispatch('setRequestedServices'); 
          window.location.reload();
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
          text: 'Failed to delete',
          icon: 'error',
          timer: 2000
        });
      }
    },


    async userOrder(context, payload) {
      try {
        console.log('payload ->'+payload);
        let result = await axios.post(`${osdURL}user/add`, payload);
        console.log('result ->' + result);
        if (result) {
          context.commit("setRequestedServices", payload);
          sweet({
            title: "Success",
            text: "Your order is successfully placed!",
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
          context.commit("setUser", result);
          cookies.set("LegitUser", {result, token });
          AuthenticateUser.applyToken(token);
          window.location.reload();
          sweet({
            title: msg,
            text: `Welcome back, ${result?.first_name}`,
            icon: "success",
            timer: 5000,
          });

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
    async logoutUser(context) {
      try {
        const { remove } = useCookies();
        remove('LegitUser');
        context.commit("setUser", null);
        router.push('/');
      } catch (error) {
        console.error("Error during logout:", error);
        sweet({
          title: "Error",
          text: "Failed to logout.",
          icon: "error",
          timer: 5000,
        });
      }
    },
    async editUser(context, payload) {
      try {
        const { data } = await axios.patch(`${osdURL}users/update/${payload.user_id}`, payload)
        if (data) {
          context.dispatch("setUsers");
          window.location.reload();
          sweet({
            title: 'Success',
            text: `User updated successfully` ,
            icon: "success",
            timer: 5000,
          });

        } 
      } catch (e) {
        sweet({
          title: "Error",
          text: `Failed to update user.`,
          icon: "error",
          timer: 5000,
        });
      }
    },

    async deleteAdminUser(context, payload) {
      console.log(payload);
      try {
        const data = await axios.delete(`${osdURL}users/${payload}/delete`) ;
        console.log(data);
        if (data) {
          context.dispatch('getUsers'); 
          window.location.reload();
          sweet({
            title: 'Success',
            text: data.msg,
            icon: 'success',
            timer: 2000
          });

        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'Failed to delete',
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



    // ------- SERVICE PROVIDERS ----- 
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
    async updateService(context, payload) {
      console.log(payload.sp_id);
      try {


        const  {result}  = (await axios.patch(`${osdURL}service-providers/update/${payload.sp_id}`)).data
        if (result) {
          context.dispatch("setServiceProviders");
          window.location.reload();
          sweet({
            title: 'Success',
            text: `Service updated successfully` ,
            icon: "success",
            timer: 5000,
          });

        } 
      } catch (e) {
        sweet({
          title: "Error",
          text: `Failed to update service.`,
          icon: "error",
          timer: 5000,
        });
      }
    },


    async registerServiceProvider(context, payload) {
      try {
        console.log(payload);
        let data =( await axios.post(`${osdURL}service-providers/register-service-provider`, payload)).data;
        if (data) {
          context.commit("setServiceProvider");
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
          window.location.reload();
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

    // TO - do
    async loginAdmin(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${osdURL}users/login`, payload)
        ).data;
        window.location.reload();
        if (result && result.userRole === "admin") {
          context.commit("setUser", result);
          cookies.set("LoggedAdmin", {  result, token, userRole: result?.userRole }); 
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result?.first_name}`,
            icon: "success",
            timer: 5000,
          });

        } else {
          sweet({
            title: "info",
            text: "You are not authorized to log in as an admin.",
            icon: "info",
            timer: 5000,
          });
          router.push('/')
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
    // async editUserService(context, payload) {
    //   try {
    //     const { data } = await axios.patch(`${osdURL}service-provider/update/${payload.sp_id}`, payload)
    //     if (data) {
    //       context.dispatch("setServiceProviders");
    //       window.location.reload();
    //       sweet({
    //         title: 'Success',
    //         text: `User updated successfully` ,
    //         icon: "success",
    //         timer: 5000,
    //       });

    //     } 
    //   } catch (e) {
    //     sweet({
    //       title: "Error",
    //       text: `Failed to update user.`,
    //       icon: "error",
    //       timer: 5000,
    //     });
    //   }
    // },

    async deleteSP(context, payload) {
      // console.log(payload);
      try {
        const data = await axios.delete(`${osdURL}service-providers/delete/${payload}`) ;
        // console.log(data);
        if (data) {
          context.dispatch('setRequestedServices'); 
          window.location.reload();
          sweet({
            title: 'Service Provider Deleted',
            text: data.msg,
            icon: 'success',
            timer: 2000
          });

        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'Failed to delete',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async deleteAll(context, payload) {
      // console.log(payload);
      try {
        const results = (await axios.delete(`${osdURL}user/${payload}/delete`)).data  ;
        // console.log(results);
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
          text: 'Failed to delete',
          icon: 'error',
          timer: 2000
        });
      }
    },
    




    // THIRD TABLE - REQUESTED SERVICES / CART / CHECKOUT

    async getUserRequests(context, payload) {
      try {

        let { results } = (
          await axios.get(`${osdURL}user/${payload}/requested-services`)
        ).data;
        // console.log(results);
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
        // console.log(results);
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
    
    async deleteSingleOrder(context, payload) {
      try {
        const {data} = await axios.delete(`${osdURL}user/${payload.user_id}/delete/${payload.rs_id}/requested-services`)  ;
        if (data) {
          context.dispatch('getUserRequests', payload.user_id); 
          window.location.reload();
          sweet({
            title: 'Service Provider Deleted',
            text: data.msg,
            icon: 'success',
            timer: 2000
          });
        }

      } catch (error) {
        sweet({
          title: 'Error',
          text: 'Failed to delete',
          icon: 'error',
          timer: 2000
        });
      }
    },
    
  },
  modules: {},
});
