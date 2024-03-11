<template>

<nav class="navbar d-flex navbar-expand-lg bg-light">
  <div class="container-fluid  ">
    <RouterLink to="/"  class=" m-4 justify-content-center navbar-brand" >OSD</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link " aria-current="page" >
            <button class="btn btn-success m-4">Login</button>
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