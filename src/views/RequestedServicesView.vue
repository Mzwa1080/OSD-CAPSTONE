<template>
  <div class="container">
    <table class="table table-striped mt-4">
      <thead>
        <th colspan="2">Routes</th>
        <th colspan="2">HTTP methods</th>
        <th colspan="2">Description</th>
      </thead>
      <tbody>
        <tr>
          <td colspan="2">/</td>
          <td colspan="2">GET</td>
          <td colspan="2">Render Home Page index.html</td>
        </tr>
        <th colspan="4">Users Endpoint</th>
        <tr>
          <td colspan="2">/users</td>
          <td colspan="2">GET</td>
          <td colspan="2">Retrieving all/multiple users</td>
        </tr>

        <th colspan="4">Products Endpoints</th>
        <tr>
          <td colspan="2">/products</td>
          <td colspan="2">GET</td>
          <td colspan="2">Retrieving multiple/all Products</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    userRequests() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUserRequests", this.userRequests);
  },
};
</script>

<style scoped></style>
