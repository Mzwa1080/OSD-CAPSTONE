<template>
  <NavbarDash />
  <div class="container">
    <div class="row m-4 d-flex justify-content-center">
      <div class="col">
        <h1>Users</h1>

      </div>
      <div class="col" v-if="userss">
        <!-- Add User Button -->
        <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add User
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Add User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form @submit.prevent="addUser">
                <div class="modal-body">
                  <input type="text" name="first_Name" class="form-control col" v-model="adminAddNewUser.first_name"
                    placeholder="First Name">
                  <input type="text" name="last_Name" class="form-control col" v-model="adminAddNewUser.last_name"
                    placeholder="Last Name">
                  <input type="text" name="user_role" class="form-control col" v-model="adminAddNewUser.userRole"
                    placeholder="User Role">
                  <input type="email" name="email" class="form-control" v-model="adminAddNewUser.email"
                    placeholder="Email Address">
                  <input type="password" name="password" class="form-control" v-model="adminAddNewUser.password"
                    placeholder="Password">
                  <input type="text" name="address" class="form-control" v-model="adminAddNewUser.address"
                    placeholder="Address">
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Add User</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="user in userss" :key="user.user_id">
        <tr>
          <td>{{ user.user_id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
              :data-bs-target="'#exampleModal' + user.user_id" @click="setEditedUser(user)">
              Edit
            </button>

            <!-- Modal -->
            <div class="modal fade" :id="'exampleModal' + user.user_id" tabindex="-1"
              :aria-labelledby="'exampleModalLabel' + user.user_id" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="'exampleModalLabel' + user.user_id">Edit {{ user.first_name }}
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form class="row  justify-content-center">
                    <div class="modal-body">
                      <input type="text" name="first_Name" class="form-control col" v-model="editedUser.first_name"
                        placeholder="first Name">
                      <input type="text " name="last_Name" class="form-control col" v-model="editedUser.last_name"
                        placeholder="Last Name">
                      <div class="col-md-12">
                        <input type="email" name="email" class="form-control" v-model="editedUser.email"
                          placeholder="Email Address">
                          <input type="text" name="userRole" class="form-control" v-model="editedUser.userRole"
                          :placeholder="user.userRole">
                        <input type="text" name="address" class="form-control" v-model="editedUser.address"
                          placeholder="Address">
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" @click="editUser" class="btn btn-primary">Save changes</button>
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <button type="submit" class="btn-danger btn" @click="deleteUser(user.user_id)"> delete </button>

          </td>
        </tr>
      </tbody>
    </table>

    <div class="row mt-4 d-flex justify-content-center" v-if="serviceProviders">
      <div class="row">
        <div class="col">
          <h1>Service Providers</h1>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal"
            data-bs-target="#serviceProviderModal">
            Add Service
          </button>

          <!-- Modal -->
          <div class="modal fade" id="serviceProviderModal" tabindex="-1" aria-labelledby="serviceProviderModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5">Add Service</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="addService">
                  <div class="modal-body">
                    <input type="text" name="company_name" class="form-control col"
                      v-model="adminAddService.company_name" placeholder="Company Name">
                    <input type="text" name="about_company" class="form-control col"
                      v-model="adminAddService.about_company" placeholder="About Company">
                    <input type="text" name="service" class="form-control col" v-model="adminAddService.service"
                      placeholder="Service">
                    <input type="text" name="service_amount" class="form-control col"
                      v-model="adminAddService.service_amount" placeholder="Service Amount">
                    <input type="text" name="address" class="form-control col" v-model="adminAddService.address"
                      placeholder="Address">
                    <input type="text" name="first_name" class="form-control col" v-model="adminAddService.first_name"
                      placeholder="First Name">
                    <input type="text" name="last_name" class="form-control col" v-model="adminAddService.last_name"
                      placeholder="Last Name">
                    <input type="text" name="phone_number" class="form-control col"
                      v-model="adminAddService.phone_number" placeholder="Phone Number">
                    <input type="password" name="password" class="form-control col" v-model="adminAddService.password"
                      placeholder="Password">
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Add Service</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>


      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>About Company</th>
            <th>Service Amount</th>
            <th>Address</th>
            <th>Cell No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="sp in serviceProviders" :key="sp.sp_id">
          <tr>
            <td>{{ sp.sp_id }}</td>
            <td>{{ sp.first_name }}</td>
            <td>{{ sp.last_name }}</td>
            <td>{{ sp.company_name }}</td>
            <td>{{ sp.about_company }}</td>
            <td>{{ sp.service_amount }}</td>
            <td>{{ sp.address }}</td>
            <td>{{ sp.phone_number }}</td>
            <td>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
              :data-bs-target="'#exampleModal' + sp.sp_id" @click="setService(sp)">
              Edit
            </button>

            <!-- Modal -->
<!-- Edit Service Modal -->
<div class="modal fade" :id="'exampleModal' + sp.sp_id" tabindex="-1" :aria-labelledby="'exampleModalLabel' + sp.sp_id" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" :id="'exampleModalLabel' + sp.sp_id">Edit {{ sp.first_name }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="editService">
        <div class="modal-body">
          <input type="text" name="company_name" class="form-control col" v-model="editedServices.company_name" placeholder="Company Name">
          <input type="text" name="about_company" class="form-control col" v-model="editedServices.about_company" placeholder="About Company">
          <input type="text" name="service" class="form-control col" v-model="editedServices.service" placeholder="Service">
          <input type="text" name="service_amount" class="form-control col" v-model="editedServices.service_amount" placeholder="Service Amount">
          <input type="text" name="address" class="form-control col" v-model="editedServices.address" placeholder="Address">
          <input type="text" name="first_name" class="form-control col" v-model="editedServices.first_name" placeholder="First Name">
          <input type="text" name="last_name" class="form-control col" v-model="editedServices.last_name" placeholder="Last Name">
          <input type="text" name="phone_number" class="form-control col" v-model="editedServices.phone_number" placeholder="Phone Number">
          <input type="password" name="password" class="form-control col" v-model="editedServices.password" placeholder="Password">
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </form>
    </div>
  </div>
</div>



                <button type="submit" class="btn-danger btn" @click="deleteProvider(sp.sp_id)"> delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row mx-auto" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import NavbarDash from "../components/NavbarDash";
import Spinner from "../components/Spinner";

export default {
  name: "AdminComppp",
  components: {
    NavbarDash,
    Spinner,
  },
  data() {
    return {
      searchTerm: "",
      editedUser: {},
      editedServices:{},
      adminAddNewUser: {
        first_name: '',
        last_name: '',
        userRole: '',
        email: '',
        password: '',
        address: '',
        img_url_users: null
      },
      adminAddService: {
        company_name: '',
        about_company: '',
        service: '',
        service_amount: '',
        address: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        password: ''


      },
    };
  },
  computed: {
    serviceProviders() {
      return this.$store.state.service_providers;
    },
    userss() {
      return this.$store.state.users;
    },
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteAdminUser", userId)
    },
    setEditedUser(user) {
      this.editedUser = { ...user };
    },
    editUser() {
      console.log("Editing user:", this.editedUser);
      this.$store.dispatch("editUser", this.editedUser);
      this.$router.push('/admin/login')
    },
    addUser() {
      this.$store.dispatch("registerUser", this.adminAddNewUser)
    },
    // I need - add and edit only for  service provider 
    setService(service) {
    this.editedServices = { ...service };
  },
    editService() {
      this.$store.dispatch("updateService", this.editedServices);
      this.$router.push('/admin/login')
    },
    addService() {
      this.$store.dispatch('registerServiceProvider', this.adminAddService)
    },
    deleteProvider(id) {
      this.$store.dispatch("deleteSP", id);
    },
  },
  mounted() {
    this.$store.dispatch("getService_Providers");
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
th {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
