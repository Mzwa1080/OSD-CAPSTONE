<template>

  <nav class="navbar d-flex background-img navbar-expand-lg">
    <div class="container-fluid ms-4 me-4 justify-content-center">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <div
          style="width: 50px; height: 50px; background-image: url(https://i.ibb.co/jyq0L5T/logo-removebg-preview.png); background-size: cover; margin-right: 10px;">
        </div>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link mt-2" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mt-2">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link mt-2">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="requestedServicesRoute" v-if="ifAdminLoggedIn || checkIfUserLoggedIn" class="nav-link mt-2">Requested Services</router-link>
          </li>
          <li v-if="ifAdminLoggedIn" class="nav-item">
            <router-link :to="{ name: 'admin' }" class="nav-link mt-2">Admin Dashboard</router-link>
          </li>
          <li v-if="checkIfUserLoggedIn" class="nav-item">
            <router-link to="/user-profile" class="nav-link mt-2">User Profile</router-link>
          </li>
          <li v-if="ifAdminLoggedIn || checkIfUserLoggedIn" class="nav-item">
            <router-link to="/contact" class="nav-link mt-2">Contact Us</router-link>
          </li>
          <li v-if="!checkIfUserLoggedIn && !ifAdminLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link mt-2">Login</router-link>
          </li>
          <li v-if="!checkIfUserLoggedIn && !ifAdminLoggedIn" class="nav-item">
            <router-link to="/osd" class="nav-link mt-2">Signup</router-link>
          </li>
          <li v-if="checkIfUserLoggedIn || ifAdminLoggedIn" class="nav-item">
            <button class="btn btn-success mt-2" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
import { useCookies } from 'vue3-cookies';

export default {
  name: 'NavbarDashboardComp',

  computed: {
    ifAdminLoggedIn() {
      const { cookies } = useCookies();

      return cookies.get('LoggedAdmin')?.result?.userRole === 'admin';
    },
    checkIfUserLoggedIn() {
      const { cookies } = useCookies();

      return cookies.get('LegitUser')?.result?.userRole === 'user';
    },
    requestedServicesRoute() {
      const { cookies } = useCookies();
      const user = cookies.get('LegitUser');

      if (user && user.result && user.result.userRole === 'user') {
        return `/user/${user.result.user_id}/requested-services`;
      } else if (this.ifAdminLoggedIn) {
        return '/admin/requested-services';
      } else {
        return '/login';
      }
    },
  },

  methods: {
    logout() {
      const { cookies } = useCookies();
      cookies.remove('LegitUser');
      cookies.remove('LoggedAdmin');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
nav {
  height: 70px;
  box-shadow: .2vw .2vw .4vw .2vw;
  background-position: sticky;
  top: 0;
}
</style>
