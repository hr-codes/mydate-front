<template>
  <div id="sign-in-page">
    <form @submit.prevent="register">
      <div class="pb-4 pt-2">
        <MyDateLogo size="logo-large" class="text-center" />
        <h5 class="text-center mt-2 text-uppercase mb-0">Sign-up</h5>
      </div>

      <label for="" class="mb-2"> Name </label>
      <input
        type="text"
        class="form-control py-3"
        placeholder="John Doe"
        v-model="user.name"
      />

      <label for="" class="mb-2 pt-3"> Username </label>
      <input
        type="text"
        class="form-control py-3"
        placeholder="john_doe"
        v-model="user.username"
      />

      <label for="" class="mb-2 pt-3"> Email </label>
      <input
        type="email"
        class="form-control py-3"
        placeholder="JohnDoe@"
        v-model="user.email"
      />

      <label for="" class="mb-2 mt-4"> Password </label>
      <input
        type="password"
        class="form-control py-3"
        placeholder="**************"
        v-model="user.password"
      />

      <label for="" class="mb-2 pt-3"> Re Password </label>
      <input
        type="password"
        class="form-control py-3"
        placeholder="**************"
        v-model="user.passwordConfirm"
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
  inject: ["$http"],
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },
  components: {
    MyDateButton,
    MyDateLogo,
  },
  methods: {
    register() {
      this.$http
        .post("http://localhost:3000/api/users/", this.user)
        .then(() => {
          console.log("ok");

          this.$router.push({
            name: "auth.sign-in",
          });
        })
        .catch((err) => console.log(err));
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
