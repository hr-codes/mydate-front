<template>
  <div id="sign-in-container" class="d-flex justify-content-end">
    <div id="sign-in-content" class="bg-white p-5 col-4">
      <RouterView />
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#sign-in-container {
  height: 100%;
  background-image: url("@/assets/images/sign-in-background.jpg");
  background-position: -120px center;

  #sign-in-content {
    background-color: #fff;
  }
}
</style>
