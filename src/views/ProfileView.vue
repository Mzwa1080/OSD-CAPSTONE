<template>
    <NavbarDash />
  
    <div class="container">
      <div class="p-2 bg-image" style="
          background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
          height: 200px;
        "
      >
        <div class="container">
          <div class="row d-flex justify-content-center mb-4" v-if="userData">
            <div class="col">
              <img  class="imgg"  src="https://i.ibb.co/hsvkQhN/user-profile-login-or-access-authentication-icon-vector-28920856.jpg"/>
            </div>
  
            <div class="col text">
              <h4 class="">First Name : {{ userData.first_name }}</h4>
              <h4 class="">
                Last Name : {{ userData.last_name }}
              </h4>
              <h4>Logged in as : {{ userData.userRole }}</h4>
              <h4 class="">Email  : {{ userData.email }}</h4>
              <h4 class="">Address : {{ userData.address4 }}</h4>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br><br><br><br><br>
      
  
      <div class="row" v-if="userData">
        <section id="contact">
          <div class="container">
            <div class="row mb-5">
              <div class="col-md-8 mx-auto text-center">
                <h6 class="text-primary">Edit</h6>
                <h1>Update Your Details</h1>
              </div>
            </div>
  
            <form @submit.prevent="postData" class="row g-3 justify-content-center">
            <div class="col-md-5">
              <input type="text" name="firstName" class="form-control" v-model="updateUserData.first_name" :placeholder="userData.first_name">
            </div>
            <div class="col-md-5">
              <input type="text" name="LastName" class="form-control" v-model="updateUserData.last_name" :placeholder="userData.last_name">
            </div>
            <div class="col-md-5">
              <input type="email" name="email" class="form-control" v-model="updateUserData.email" :placeholder="userData.email">
            </div>
            <div class="col-md-5">
              <input type="password" name="password" class="form-control" v-model="updateUserData.password" :placeholder="userData.password">
            </div>
            <div class="col-md-5">
              <input type="text" name="address" class="form-control" v-model="updateUserData.address" :placeholder="userData.address">
            </div>
            <div class="col-md-10">
              <input type="text" name="userRole" class="form-control" :placeholder="userData.userRole" disabled>
            </div>
            <div class="col-md-10 d-grid">
              <button class="btn btn-primary" type="submit">Update</button>
            </div>
          </form>

          <div class="row g-3 justify-content-center" >
            <div class="col-md-10 d-grid">
              <button class="btn btn-danger" type="submit" @click="deleteAcc">Delete Account</button>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarDash from "@/components/NavbarDash.vue";
  import { useCookies } from "vue3-cookies";
  export default {
    name: 'ProfileVieew',
    components: {
      NavbarDash,
    },
    data() {
      return {
        updateUserData: {
        user_id : this.user().user_id,
          first_name: '',
          last_name: '',
          userRole: '',
          email: '',
          address: '',
          password: ''
        }
      }
    },
  
    methods: {
      user() {
        const { cookies } = useCookies();
        let userID = cookies.get('LegitUser')
        return userID.result;
      },
      postData() {
        this.$store.dispatch("editUser", this.updateUserData);
      },
      deleteAcc(){
        return this.$store.dispatch('deleteSingleUser', this.user().user_id)
      }
    },
  
    computed: {
      userData() {
        return this.$store.state.user;
      },
    },
  
    mounted() {
        console.log(this.user().user_id);
      this.$store.dispatch("getASingleUser", this.user());
    },
  };
  </script>
  
  <style scoped>
  .imgg {
    margin-top: 5em;
    border-radius: 10rem;
    height: 15rem;
    width: 15rem;
    box-shadow: 0.2vw 0.2vw 0.2vw;
  }
  .text {
    margin-top: 10rem;
    font-size: 20px;
    margin-bottom: 5rem;
    z-index: 1;
  }
  
  section {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  </style>
  