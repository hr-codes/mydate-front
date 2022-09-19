<template>
  <button class="rounded d-flex align-items-center justify-content-center">
    <div>{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

button {
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: $second-color;
  color: #fff;
}
</style>
