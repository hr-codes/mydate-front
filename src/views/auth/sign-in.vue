<template>
  <div id="sign-in-page">
    <form @submit.prevent="login">
      <div class="pb-5 mb-4">
        <MyDateLogo size="logo-large" class="text-center" />
      </div>

      <label for="" class="mb-2 pt-5"> Username </label>
      <input
        type="text"
        class="form-control py-3"
        placeholder="John Doe"
        value="John Doe"
      />

      <label for="" class="mb-2 mt-4"> Password </label>
      <input
        type="password"
        class="form-control py-3"
        placeholder="**************"
        value="**************"
      />

      <MyDateButton text="Entrar" class="mt-5 mx-auto w-100 py-3 text-center" />
    </form>

    <div class="text-center mt-5">
      Ainda não tem usuário?
      <a href="">Criar minha conta</a>
    </div>
  </div>
</template>

<script>
import MyDateButton from "../../components/MyDateButton.vue";
import MyDateLogo from "../../components/MyDateLogo.vue";

export default {
  components: {
    MyDateButton,
    MyDateLogo,
  },
  methods: {
    login() {
      this.$router.push({
        name: "matches",
      });
    },
  },
};
</script>

<style lang="scss">
#sign-in-page {
  label {
    font-size: 1.2rem;
  }
}
</style>
