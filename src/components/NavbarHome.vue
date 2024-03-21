<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid ms-4 me-4 ">
    <RouterLink to="/" class="navbar-brand d-flex align-items-center" href="#home">
    <div style="width: 50px; height: 50px; background-image: url(https://i.ibb.co/jyq0L5T/logo-removebg-preview.png); background-size: cover; margin-right: 10px;">
            </div>
  </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link " aria-current="page" >
            <a class="btn btn-primary ms-lg-3"  role="button">Login</a>
          </RouterLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

</template>

<script>

    export default {
        name : 'NavbarComponent'
    }
</script>

<style scoped>

nav{
    height: 70px;
    box-shadow: .2vw .2vw .4vw .2vw;
    background-position: sticky;
    top: 0;
}
</style>