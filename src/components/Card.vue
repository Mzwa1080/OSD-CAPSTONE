<template>
  <div class="card" style="width: 18rem">
    <div class="card-img-top" > </div>
    <slot name="card-img-top"></slot>

    <div class="card-body">
      <h5 class="card-title">
        <slot name="card-title"></slot>
      </h5>
      <p class="card-text">
        <slot name="card-text"></slot>
      </p>
      <a href="#" class="btn btn-primary">
        <slot name="button"></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CArrdComp",
};
</script>

<style scoped></style>
