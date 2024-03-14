<template>
  <NavbarDash />

  <div
    class="p-2 bg-image"
    style="
      background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
      height: 200px;
    "
  >
    <div class="container">
      <div class="row d-flex justify-content-evenly" v-if="serviceProvider">
        <div class="col">
          <img
            class="imgg"
            src="https://mdbootstrap.com/img/new/textures/full/171.jpg"
          />
        </div>
        <div class="col text">
          <h4 class="">Company : {{ serviceProvider.company_name }}</h4>
          <h4 class="">
            FullName : {{ serviceProvider.first_name }}
            {{ serviceProvider.last_name }}
          </h4>
          <h4 class="">Service : {{ serviceProvider.service }}</h4>
          <h4 class="">Address : {{ serviceProvider.address }}</h4>
        </div>
      </div>
      <div class="row heiiight d-flex justify-content-center">
        <div
          class="about m-5"
          v-if="serviceProvider && serviceProvider.about_company"
        >
          <h2>About</h2>
          <hr />
          <p>{{ serviceProvider.about_company }}</p>
        </div>

      </div>

      <div class="row">
        <div class="col">
          <img
            src="https://i.ibb.co/PFp8D2C/div.jpg"
            style="height: 30rem; width: 40rem"
            alt=""
          />
        </div>
        <div class="col">
          {{getUserId}}
          <form @submit.prevent="submitOrder">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form6Example1"
                    >First name</label
                  >
                  <input type="text" id="form6Example1" class="form-control" />
                </div>
              </div>
              <div class="col">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form6Example2"
                    >Last name</label
                  >
                  <input type="text" id="form6Example2" class="form-control" />
                </div>
              </div>

                          
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3"
                            >Request A Service</label
                            >
                            <input
                            type="text"
                            id="form3Example3"
                            class="form-control"
                            v-model = data.service_requested
                            
                          />
                         <h1>{{selectedSP}}</h1> 
                       
              </div>
            </div>


            

            <!-- Submit button -->
            <button
              data-mdb-ripple-init
              type="submit"
              class="btn btn-primary btn-block mb-4"
            >
              Place order
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDash from "@/components/NavbarDash.vue";
import { useCookies } from "vue3-cookies";

export default {
  components: {
    NavbarDash,
  },
  computed: {
    serviceProvider() {
      return this.$store.state.service_provider;
    },
    getUserId(){
      let {cookies} = useCookies()
      let userId = cookies.get('LegitUser')
      return userId.result_user_id
    },
    selectedSP(){
      let {cookies} = useCookies()
      let spId = cookies.get('LegitServiceProvider')
      return spId.result.sp_id;
    },

  },
  methods:{

    
    getUser(){
      let {cookies} = useCookies()
      let userId = cookies.get('LegitUser')
      return userId.result_user_id
    },
    selectedProvider(){
      let {cookies} = useCookies()
      let spId = cookies.get('LegitServiceProvider')
      return spId.result.sp_id;
    },
    sendData(){
     let data  = {
        user_id : this.getUser,
        sp_id : this.selectedProvider,
        service_requested : this.service_requested,

      }
      console.log(data);
      
      this.$route.dispatch('bookOrder', data)
    },

  },


  // data() {
  //   return {
  //     data : {
  //       user_id : this.getUser,
  //       sp_id : this.selectedProvider,
  //       service_requested : this.service_requested,

  //     }

  //   }
  // },
  mounted() {
    this.$store.dispatch("getServiceProvider", { id: this.$route.params.id })
    // this.$store.dispatch('bookOrder', this.getUserId)
  },
};
</script>

<style scoped>
.imgg {
  margin-top: 5em;
  border-radius: 10rem;
  height: 15rem;
  width: 15rem;
  box-shadow: 0.2vw 0.2vw 0.2vw;
}
.text {
  margin-top: 10rem;
  font-size: 20px;
}
.about {
  box-shadow: 0.3vw 0.3vw 0.3vw 0.3vw;
  border-radius: 2rem;
  width: 50rem;
  height: auto;
  padding: 1rem;
}
.heiiight {
  margin: 2rem;
}
</style>
1
