<template>
    <div>

        <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h2 class="fw-bold mb-5">Login</h2>

        <!-- Form Selector -->
        <div class="mb-4">
          <label for="formSelector" class="form-label">Select Login Type:</label>
          <select v-model="selectedForm" id="formSelector" class="form-select">
            <option value="user">User Login</option>
            <option value="serviceProvider">Service Provider Login</option>
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
            <div class="row">
              <div class="col-md-6 mb-4">
                  <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" class="form-control" v-model="user.email" />
                  </div>
              </div>
              <div class="col-md-6 mb-4">
                  <div class="form-outline mb-4">
                      <label class="form-label" for="form3ExampleAddress">Password</label>
                    <input type="password" id="form3ExampleAddress" class="form-control" v-model="user.password" />
                  </div>
                
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>

        </form>

        <!-- Service Provider Registration Form -->
        <form v-show="selectedForm === 'serviceProvider'" @submit.prevent="submitServiceProviderForm">
          <div class="p-1 bg-image" style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 200px;
        "></div>
  <div class="card mx-4 mx-md-4 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
    <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
            <div class="row">
              <div class="col-md-6 mb-4">
                  <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" id="form3Example3" class="form-control" v-model="serviceProvider.email" />
                  </div>
              </div>
              <div class="col-md-6 mb-4">
                  <div class="form-outline mb-4">
                      <label class="form-label" for="form3ExampleAddress">Password</label>
                    <input type="password" id="form3ExampleAddress" class="form-control" v-model="serviceProvider.password" />
                  </div>
                
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>
        </form>

        <!-- Register buttons -->

      </div>
    </div>
    </div>
</template>

<script>
    export default {
        
        data() {
    return {
      selectedForm: 'user', 
      
      user: {
        email: '',
        password: ''
      },
      serviceProvider: {
        email: '',
        password: '',
       
      },
    };
  },
  methods: {
    submitUserForm() {
      console.log('User form submitted');
    },
    submitServiceProviderForm() {
      this.$store.dispatch('loginServiceProvider', this.serviceProvider)
          this.$router.push('/dashboard');
 
    },
    submitForm() {
      if (this.selectedForm === 'user') {
        this.$store.dispatch('loginUser', this.user)
            this.$router.push('/dashboard');

      } else if (this.selectedForm === 'serviceProvider') {
        this.submitServiceProviderForm();
      }
    },
  },
    }
</script>

<style scoped>

</style>