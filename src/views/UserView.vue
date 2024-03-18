<template>
  <NavbarDash />
  <div class="container">
    <div class="row mt-3">
      <h1>Users Requests</h1>
    </div>
    <div class="row">
      <table class="table table-striped mt-4">
        <thead>
          <th colspan="2">#</th>
          <th colspan="2">Service Provide</th>
          <th colspan="2">Service</th>
          <th colspan="2">Amount</th>
          <th colspan="2">Cell No.</th>
          <th colspan="2">Address</th>
          <th colspan="2">Requested Date</th>
          <th colspan="2">Action</th>
        </thead>
        <tbody v-for="user in userRequests" :key="user.id">

          <td colspan="2">{{ user.rs_id }}</td>

          <tr>
            <td colspan="2">{{ user.sp_comp_name }}</td>
            <td colspan="2">{{ user.sp_service }}</td>
            <td colspan="2">{{ user.sp_amount }}</td>
            <td colspan="2">{{ user.sp_phone_number }}</td>
            <td colspan="2">{{ user.sp_address }}</td>
            <td colspan="2">{{ user.request_date }}</td>

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
    this.$store.dispatch("getUserRequests", this.$route.params.id);
  },
};
</script>

<style scoped></style>
