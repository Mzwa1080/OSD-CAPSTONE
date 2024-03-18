<template>
  <NavbarDash />
  <div class="container">
    <div class="row mt-3">
      <h1>Users And Requests</h1>
    </div>
    <div class="row">
      <table class="table table-striped mt-4">
        <thead>
          <th colspan="2">#</th>
          <th colspan="2">Name</th>
          <th colspan="2">Requestors' Address</th>
          <th colspan="2">Service</th>
          <th colspan="2">Company</th>
          <th colspan="2">Amount</th>
          <th colspan="2">Address</th>
          <th colspan="2">Requested Date</th>
          <th colspan="2">Cell No.</th>
          <th colspan="2">Action</th>
        </thead>
        <tbody v-for="user in userRequests" :key="user.id">

            <tr>
            <td colspan="2">{{ user.rs_id }}</td>
            <td colspan="2">{{ user.user_first_name }}</td>
            <td colspan="2">{{ user.user_add }}</td>
            <td colspan="2">{{ user.sp_service }}</td>
            <td colspan="2">{{ user.sp_comp_name }}</td>
            <td colspan="2">{{ user.sp_amount }}</td>
            <td colspan="2">{{ user.sp_address }}</td>
            <td colspan="2">{{ user.request_date }}</td>
            <td colspan="2">{{ user.sp_phonenumber }}</td>

            <td>
              <button
                type="submit"
                class="btn-danger btn"
                @click="deleteProvider(user.user_id)"
              >
                delete
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
      // console.log(id);
      this.$store.dispatch("deleteSP", id);
    },
  },

  mounted() {
    this.$store.dispatch("getAllRequests");
  },
};
</script>

<style scoped>

</style>
