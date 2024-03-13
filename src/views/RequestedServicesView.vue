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



};
</script>

<style scoped></style>
