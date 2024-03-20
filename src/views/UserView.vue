<template>
  <NavbarDash />
  <div class="container">
    <div class="row mt-3">
      <h1>Users And Requests</h1>
    </div>
    <div class="row">
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Requestor's Name</th>
            <th>Requestor's Address</th>
            <th>Service</th>
            <th>Company</th>
            <th>Amount</th>
            <th>Address</th>
            <th>Requested Date</th>
            <th>Cell No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userRequests" :key="user.id">
            <td>{{ user.rs_id }}</td>
            <td>{{ user.user_first_name }}</td>
            <td>{{ user.user_add }}</td>
            <td>{{ user.sp_service }}</td>
            <td>{{ user.sp_comp_name }}</td>
            <td>{{ user.sp_amount }}</td>
            <td>{{ user.sp_address }}</td>
            <td>{{ user.request_date }}</td>
            <td>{{ user.sp_phonenumber }}</td>
            <td>
              <button type="submit" class="btn-danger btn" @click="deleteProvider(user.user_id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavbarDash from "../components/NavbarDash.vue";

export default {
  components: {
    NavbarDash,
  },

  computed: {
    userRequests() {
      return this.$store.state.requested_services;
    },
  },

  methods: {
    deleteProvider(id) {
      this.$store.dispatch("deleteSP", id);
    },
  },

  mounted() {
    this.$store.dispatch("getAllRequests");
  },
};
</script>

<style scoped>
th {
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden; /* Hides any overflow */
  text-overflow: ellipsis; /* Adds ellipsis (...) when text overflows */
}
</style>
