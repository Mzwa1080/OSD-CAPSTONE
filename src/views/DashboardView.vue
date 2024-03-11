<template>
  <div>
    <NavbarDash />

    <div class="row mt-4" >
        <div class="col">
            <input type="text" v-model="searchTerm" style="height: 40px;" placeholder="Search" class="search" @input="search" />
        </div>

    <ul>
      
    </ul>


    </div>
    
    <div class="row mt-4 d-flex justify-content-center" v-if="serviceProviders">
      <div class="card m-2" v-for="sp in serviceProviders" :key="sp.sp_id" style="width: 18rem">
        <img :src="sp.img_url_sp" class="card-img-top" :alt="img_url_sp" />
        <div class="card-body">
          <h5 class="card-title">{{sp.company_name}}</h5>
          <p class="card-text">
            {{ sp.service }}
          </p>
          <RouterLink :to="{name:'spview', params:{id:sp.sp_id} }">

            <button class="btn btn-secondary">
               Request A Service
            </button>

          </RouterLink>

        </div>
      </div>
    </div>
    <!-- <div class="row mx-auto" v-else>
        <Spinner /> -->
  </div>
</template>

<script>
import NavbarDash from "../components/NavbarDash";

export default {
  name: "DashboardComp",
  components: {
    NavbarDash,
  },
  data() {
    return {
      searchTerm: ''
    };
  },

  

  computed: {
    serviceProviders() {
      return this.$store.state.service_providers;
    },
    filteredServiceProviders() {
      if (!this.searchTerm) {
        return this.serviceProviders;
      }
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      return this.serviceProviders.filter(sp =>
        sp.company_name.toLowerCase().includes(searchTermLowerCase) ||
        sp.service.toLowerCase().includes(searchTermLowerCase)
      );
    }
  
  },

  methods : {
    search(){

    }
  },

  mounted() {
    this.$store.dispatch("getService_Providers");
  },
};
</script>

<style scoped></style>
