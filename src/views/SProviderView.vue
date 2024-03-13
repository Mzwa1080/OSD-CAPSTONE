<template>
      <NavbarDash />

      <div class="p-2  bg-image" style="
          background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
          height: 200px;
          ">
      <div class="container">

     
        <div class="row  d-flex justify-content-evenly" v-if="serviceProvider">
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
        <div class="row heiiight   d-flex justify-content-center">
          <div class="about m-5" v-if="serviceProvider && serviceProvider.about_company">
              <h2>About</h2>
              <hr >
              <p>{{ serviceProvider.about_company }}</p>
          </div>
        </div>
  
        <div class="row">
          <div class="col">
            <img src="https://i.ibb.co/PFp8D2C/div.jpg" style="height: 30rem; width: 40rem;" alt="">

          </div>
          <div class="col">
            <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="form6Example1" class="form-control" />
        <label class="form-label" for="form6Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="form6Example2" class="form-control" />
        <label class="form-label" for="form6Example2">Last name</label>
      </div>
    </div>
  </div>

  <!-- Text input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div>

  <!-- Text input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

  <!-- Email input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="form6Example5" class="form-control" />
    <label class="form-label" for="form6Example5">Email</label>
  </div>

  <!-- Number input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>




  <!-- Submit button -->
  <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Place order</button>
</form>
          </div>
        </div>
      </div>

      
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
            // console.log(this.$store.state.service_provider.about_company);
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
    height: auto;
    padding: 1rem;
  }
  .heiiight{
    margin: 2rem;
  }
  </style>
1