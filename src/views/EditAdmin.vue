<template>
  <div>
    <h1>We'll edit</h1>
    <h1>We must get the user_id, selected in the edit</h1>

    

    <h1></h1>
  </div>
</template>

<script>
export default {
  name: "EditComp",

  computed: {
    editUser() {
      return this.$store.state.requested_services;
    },
  },

  mounted() {
    // console.log("this is user ->" + this.user().user_id);
    console.log(this.editUser);
    this.$store.dispatch("getServiceProvider", { id: this.$route.params.id });
  },
};
</script>

<style scoped></style>
