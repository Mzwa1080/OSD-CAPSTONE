<template>
  <NavbarDash />
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-8">
        <h2 class="fw-bold mb-5">Login</h2>

        <div class="mb-4">
          <label for="formSelector" class="form-label">Select Login Type:</label>
          <select v-model="selectedForm" id="formSelector" class="form-select">
            <option value="user">User Login</option>
            <option value="serviceProvider">Service Provider Login</option>
            <option value="admin">Admin Login</option>

          </select>
        </div>

        <form v-if="selectedForm === 'user'" @submit.prevent="submitForm">
          <div class="p-2 bg-image" style="
              background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
              height: 300px;
            "></div>
          <div class="card mx-4 mx-md-4 shadow-5-strong" style="
              margin-top: -250px;
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
                        <input type="email" required id="form3Example3" class="form-control" v-model="user.email" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3ExampleAddress">Password</label>
                        <input type="password" required id="form3ExampleAddress" class="form-control" v-model="user.password" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 d-grid">

            <button type="submit" class="btn btn-primary btn-block mb-4 ">
              Login
            </button>
          </div>

        </form>

        <form v-show="selectedForm === 'serviceProvider'" @submit.prevent="submitServiceProviderForm">
          <div class="p-1 bg-image" style="
              background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
              height: 300px;
            "></div>
          <div class="card mx-4 mx-md-4 shadow-5-strong" style="
              margin-top: -250px;
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
                        <input type="email" required id="form3Example3" class="form-control" v-model="serviceProvider.email" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3ExampleAddress">Password</label>
                        <input type="password" required id="form3ExampleAddress" class="form-control"
                          v-model="serviceProvider.password" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 d-grid">

            <button type="submit" class="btn btn-primary btn-block mb-4 ">
              Login
            </button>
          </div>
        </form>

        <form v-if="selectedForm === 'admin'" @submit.prevent="submitAdminForm">
          <div class="p-2 bg-image" style="
              background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
              height: 400px;
            "></div>
          <div class="card mx-4 mx-md-4 shadow-5-strong" style="
              margin-top: -370px;
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
                        <input type="email"  required id="form3Example3" class="form-control" v-model="admin.email" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-outline ">
                        <label class="form-label" for="form3ExampleAddress">Password</label>
                        <input type="password" required id="form3ExampleAddress" class="form-control" v-model="admin.password" />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3ExampleAddress">User Role</label>
                        <input type="text" required id="form3ExampleAddress" class="form-control" v-model="admin.userRole" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 d-grid">

            <button type="submit" class="btn btn-primary btn-block mb-4 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarDash from '../components/NavbarDash.vue'
export default {
  components :{
    NavbarDash
  },
  data() {
    return {
      selectedForm: "user",

      user: {
        email: "",
        password: "",
      },
      serviceProvider: {
        email: "",
        password: "",
      },
      admin: {
        email: "",
        password: "",
        userRole: "admin"
      },
    };
  },
  methods: {
    submitUserForm() {
      console.log("User form submitted");
    },
    submitServiceProviderForm() {
      this.$store.dispatch("loginServiceProvider", this.serviceProvider);
      this.$router.push("/dashboard");
    },
    submitAdminForm() {
      this.$store.dispatch("loginAdmin", this.admin);
      this.$router.push("/dashboard");
    },
    submitForm() {
      if (this.selectedForm === "user") {
        this.$store.dispatch("loginUser", this.user);
        this.$router.push("/dashboard");
      } else if (this.selectedForm === "serviceProvider") {
        this.submitServiceProviderForm();
      }
    },
  },
};
</script>

<style scoped></style>
