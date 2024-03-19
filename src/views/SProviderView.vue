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
          <form @submit.prevent="sendData()">
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4" v-if="user()">
              <div class="col">
                <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form6Example1"
                    >First name</label
                  >
                  <input type="text" id="form6Example1" class="form-control"
                  :placeholder="user().first_name"   v-model="payload.user_first_name"
                  />
                </div>
              </div>

               <div data-mdb-input-init class="form-outline">
                  <label class="form-label" for="form6Example2"
                  >Address</label
                  >
                  <input type="text" id="form6Example2" class="form-control" 
                  :placeholder="user().address"
                  v-model="payload.user_add"
 />
                </div>

              
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3"
                  >Request A Service</label
                >
                <input
                  type="text"
                  id="form3Example3"
                  class="form-control"
                  v-model="payload.service_requested"
                />
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
  data() {
    return {
      payload: {
        service_requested: "",
        sp_id : this.$route.params.id,
        user_id : this.user().user_id,
      },
    };
  },
  computed: {
    serviceProvider() {
      return this.$store.state.service_provider;
    },

  },

  methods :  {
    user(){
      const { cookies } = useCookies();
      let userID = cookies.get('LegitUser')
      return userID.result;
    },

    sendData(){
      return this.$store.dispatch('bookOrder', this.payload)
    }

  },


  mounted() {
    
    // console.log("this is user ->" + this.user().user_id);
    // console.log(this.payload);
    this.$store.dispatch("getServiceProvider", { id: this.$route.params.id });
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
