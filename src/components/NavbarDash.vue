<template>

<nav class="navbar d-flex background-img navbar-expand-lg ">
  <div class="container-fluid justify-content-center">
      <a class="navbar-brand  HZ" href="/">OSD</a>

    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link " aria-current="page" >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link " >About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link " >Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin" class="nav-link " >Admin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link " >Contact</RouterLink>
        </li>
      </ul>

    </div>


  </div>
</nav>


</template>

<script>
    export default {
        name : 'NavbarDashboardComp'
    }
</script>

<style scoped>

nav {
  height: 70px;
    box-shadow: .2vw .2vw .4vw .2vw;
    background-position: sticky;
    top: 0;
}
</style>