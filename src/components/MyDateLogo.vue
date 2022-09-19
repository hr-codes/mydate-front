<template>
  <span class="my-date-logo">
    <h1 class="mb-1" :class="size">MY<strong>DATE</strong></h1>
  </span>
</template>

<script>
export default {
  props: ["size"],
};
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";

.my-date-logo {
  h1 {
    font-weight: 700;
    color: $first-color;

    strong {
      color: $second-color;
    }
  }
}

.logo-small {
  font-size: 1.2rem;
}

.logo-medium {
  font-size: 2rem;
}

.logo-large {
  font-size: 3rem;
}
</style>
