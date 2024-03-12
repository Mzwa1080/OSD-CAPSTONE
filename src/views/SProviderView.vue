<template>
      <NavbarDash />

      <div class="p-2 mb-5 bg-image" style="
          background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
          height: 200px;
          ">
        <div class="row d-flex justify-content-evenly" v-if="serviceProvider">
          <div class="col ">
            <img class="imgg" src="https://mdbootstrap.com/img/new/textures/full/171.jpg">
          </div>
          <div class="col  text">
            <h4 class="">Company : {{ serviceProvider.company_name }}</h4>
            <h4 class="">FullName : {{ serviceProvider.first_name }} {{ serviceProvider.last_name }}</h4>
            <h4 class="">Service : {{ serviceProvider.service }}</h4>
            <h4 class="">Address : {{ serviceProvider.address }}</h4>
          </div>
        </div>
      </div>

      <div class="row color mt-5  d-flex justify-content-center">
        <div class="about m-5">
            <h2>About</h2>
            <hr v-if="serviceProvider">
            <!-- <p>{{ serviceProvider.about_company}}</p> -->
        </div>
      </div>

      <div class="row">
        
      </div>
  </template>
  
  <script>
  import NavbarDash from '@/components/NavbarDash.vue';
  
  export default {
    components: {
      NavbarDash
    },
    computed: {
          serviceProvider(){
              return this.$store.state.service_provider;
           }
    },
    mounted() {
      this.$store.dispatch('getServiceProvider', { id: this.$route.params.id });
    }
  }
  </script>
  
  <style scoped>
  .imgg {
    margin-top: 5em;
    border-radius: 10rem;
    height: 15rem;
    width: 15rem;
    box-shadow: .2vw .2vw .2vw;
  }
  .text {
    margin-top: 10rem;
    font-size: 20px;
  }
  .about{
    box-shadow: .3vw .3vw .3vw .3vw;
    border-radius: 2rem;
    width: 50rem;
    height: 15rem;
  }
  </style>
  