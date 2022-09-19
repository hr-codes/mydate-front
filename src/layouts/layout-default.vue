<template>
  <div id="default-container" class="d-flex flex-column">
    <div id="topbar" class="px-5 py-2 shadow-sm">
      <MyDateLogo size="logo-medium" />
    </div>

    <RouterView />

    <div
      id="bottombar"
      class="mt-auto mx-auto shadow rounded-top row m-0 overflow-hidden"
    >
      <button class="col btn link active">
        <img src="@/assets/icons/world.png" alt="" />
        <h6 class="small text-dark mb-0 pt-1">World</h6>
      </button>

      <button class="col btn link">
        <img src="@/assets/icons/chat.png" alt="" />
        <h6 class="small text-dark mb-0 pt-1">Chat</h6>
      </button>

      <button class="col btn link">
        <img src="@/assets/icons/match.png" alt="" />
        <h6 class="small text-dark mb-0 pt-1">Matches</h6>
      </button>

      <button class="col btn link">
        <img src="@/assets/icons/profile.png" alt="" />
        <h6 class="small text-dark mb-0 pt-1">Profile</h6>
      </button>
    </div>
  </div>
</template>

<script>
import MyDateLogo from "../components/MyDateLogo.vue";

export default {
  components: {
    MyDateLogo,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";

html,
body,
#app {
  height: 100%;
}

#default-container {
  background-color: rgb(245, 245, 245);
  height: 100%;

  #topbar {
    background-color: #fff;
  }

  #bottombar {
    width: 320px;
    height: 65px;
    background-color: #fff;

    .link {
      border: 0;
      border-radius: 0;

      img {
        width: 27px;
      }

      &:hover {
        background-color: $second-color;

        h6 {
          color: #fff !important;
        }

        img {
          filter: invert(100%);
        }
      }

      &.active {
        background-color: $second-color;

        h6 {
          color: #fff !important;
        }

        img {
          filter: invert(100%);
        }
      }
    }
  }
}
</style>
