<template>

<nav class="navbar d-flex navbar-expand-lg bg-light">
  <div class="container-fluid justify-content-center ">
    <RouterLink to="/"  class=" justify-content-center navbar-brand" >OSD</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse  navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
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