<template>

  <NavbarDash />
    <div class="container">
  
      <h1>Users</h1>
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Cell No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in userss" :key="user">
          <tr>
            <td>{{ user.user_id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.phone_number }}</td>
            <td>
              <!-- Button trigger modal -->
              <button type="button" @click="add" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
              </button>
  
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Edit </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
  
              <button type="submit" class="btn-danger btn" @click="deleteProvider(sp.sp_id)"> delete </button>
  
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="row mt-4 d-flex justify-content-center" v-if="serviceProviders">
        <h1>Service Providers</h1>
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
                <span>
                  <RouterLink :to="{ name: 'edit', params: { id: sp.sp_id } }">
                    <button type="submit" class="btn-success btn"> Edit </button>
                  </RouterLink>
                  <button type="submit" class="btn-danger btn" @click="deleteProvider(sp.sp_id)"> delete </button>
                </span>
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
  import NavbarDash from "../components/NavbarDash"
  import Spinner from "../components/Spinner";
  export default {
    name: "AdminComppp",
  
    components: {
      Spinner,
      NavbarDash
    },
  
    data() {
      return {
        searchTerm: "",
      };
    },
  
    computed: {
      serviceProviders() {
        return this.$store.state.service_providers;
      },
      userss() {
        return this.$store.state.users
      }
    },
  
    methods: {
      deleteProvider(id) {
        console.log(id);
        this.$store.dispatch("deleteSP", id);
      },
      deleteUser(id){
        this.$store.dispatch('deleteUser', id)
      }
    },
  
    mounted() {
      this.$store.dispatch("getService_Providers");
      this.$store.dispatch("getUsers")
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
  