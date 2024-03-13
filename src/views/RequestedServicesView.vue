<template>
  <div class="container">
    <table class="table table-striped mt-4" v-if="serviceProvider">
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
          <td colspan="2">{{ serviceProvider.service_requested }}</td>
          <!-- <td colspan="2">GET</td>
          <td colspan="2">Retrieving all/multiple users</td> -->
        </tr>



      </tbody>
    </table>
  </div>
</template>

<script>
// import { useCookies } from 'vue3-cookies';

export default {

  computed : {
    serviceProvider(){
      return this.$store.state.order_requests
    }
  },
  mounted(){
      this.$store.dispatch('getUserRequests')
      // this.$store.dispatch('getUserRequests')
  }
  
  // mounted() {
  //   // Retrieve user ID from cookies
  //   const { cookies } = useCookies();
  //   const userId = cookies.get('use_id'); // Assuming user ID is stored as 'user_id' in cookies

  //   return { userId };
  // }
};
</script>

<style scoped></style>
