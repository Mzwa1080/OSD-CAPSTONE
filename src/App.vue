<template>

  <router-view/>

  
  <Footer/>

</template>


<script>
import Footer from './components/Footer.vue'

  export default{
    components : {
    Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Damion&family=Dancing+Script:wght@400..700&family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&family=Vesper+Libre:wght@400;500;700;900&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
  
  color: #052d3a;
    border: 0;
    border-bottom: 4px solid #2488C8;
    background-color: #fff;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


