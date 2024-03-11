<template>
  <NavbarHome />
  <div class="container">

    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h2 class="fw-bold mb-5">Sign up now</h2>

        <!-- Form Selector -->
        <div class="mb-4">
          <label for="formSelector" class="form-label">Select Registration Type:</label>
          <select v-model="selectedForm" id="formSelector" class="form-select">
            <option value="user">User Registration</option>
            <option value="serviceProvider">Service Provider Registration</option>
          </select>
        </div>

        <form v-if="selectedForm === 'user'" @submit.prevent="submitForm">

            <div class="p-2 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
        "></div>
  <div class="card mx-4 mx-md-4 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up now</h2>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example1" class="form-control" v-model="user.first_name" />
                  <label class="form-label" for="form3Example1">First name</label>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control" v-model="user.last_name" />
                  <label class="form-label" for="form3Example2">Last name</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control" v-model="user.email" />
              <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="form3ExampleAddress" class="form-control" v-model="user.address" />
              <label class="form-label" for="form3ExampleAddress">Address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="form3ExampleImgUrl" class="form-control" v-model="user.img_url_users" />
              <label class="form-label" for="form3ExampleImgUrl">Profile Picture Link</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" class="form-control" v-model="user.password" />
              <label class="form-label" for="form3Example4">Password</label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" v-model="user.subscribe" />

            </div>
        </div>
      </div>
    </div>
  </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

        </form>

        <!-- Service Provider Registration Form -->
        <form v-show="selectedForm === 'serviceProvider'" @submit.prevent="submitServiceProviderForm">
          <!-- Service provider form fields here -->
          <!-- ... -->

          <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
        </form>

        <!-- Register buttons -->

      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarHome,
  },
  data() {
    return {
      selectedForm: 'user', 
      
      user: {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        img_url_users: '',
      },
    };
  },
  methods: {
    submitUserForm() {
      console.log('User form submitted');
    },
    submitServiceProviderForm() {
      console.log('Service provider form submitted');
    },

     submitForm() {
       this.$store.dispatch('registerUser', this.user);

      this.$router.push('/dashboard');
    },
  },
};
</script>
