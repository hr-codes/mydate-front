<template>
  <div v-if="render">
    <div class="match-card bg-white p-2 rounded-3 shadow">
      <div
        v-if="matchesState.matches.people[0]"
        class="w-100 h-100 overflow-hidden rounded-2 position-relative"
      >
        <img
          :src="matchesState.matches.people[0].picture.large"
          alt=""
          class="w-100 rounded-2"
        />

        <div class="match-info ps-4 pt-5">
          <h2 class="text-white fw-bold pt-3">
            {{ matchesState.matches.people[0].name.first }}
            {{ matchesState.matches.people[0].name.last }}
          </h2>

          <h5 class="text-white">
            {{ matchesState.matches.people[0].dob.age }} anos,
            {{ matchesState.matches.people[0].location.country }}
            ({{ matchesState.matches.people[0].location.city }})
          </h5>
        </div>
      </div>

      <MyDateLoading v-else />
    </div>
  </div>

  <MyDateLoading v-else />
</template>

<script>
import { matchesStore } from "@/stores/matches";
import MyDateLoading from "./MyDateLoading.vue";

export default {
  inject: ["$http"],
  setup() {
    const matchesState = matchesStore();

    return { matchesState };
  },
  data() {
    return {
      render: false,
    };
  },
  watch: {
    "matchesState.matches.people": {
      handler(value) {
        if (value.length === this.matchesState.searchRemains) {
          this.getCrush();
        }
      },
      deep: true,
    },
  },
  methods: {
    async getCrush() {
      await this.$http
        .get(
          `https://randomuser.me/api/?gender=${this.matchesState.searchGender}&inc=login,gender,name,location,picture,dob&results=${this.matchesState.results}`
        )
        .then((res) => {
          this.matchesState.fetchCount += res.data.info.results;
          if (this.matchesState.matches.people.length) {
            this.matchesState.matches.people = [
              ...this.matchesState.matches.people,
              ...res.data.results,
            ];
            return;
          }
          this.matchesState.matches.people = res.data.results;
          this.render = true;
        });
    },
  },
  async created() {
    await this.getCrush();
  },
  components: { MyDateLoading },
};
</script>

<style lang="scss">
$width: 380px;
$height: 530px;

.match-card {
  width: $width;
  height: $height;
  img {
    height: $height - 15px;
  }

  .match-info {
    height: $height - 350px;
    background-color: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    position: absolute;
    transform: translateY(-180px);
    width: $width - 16px;
  }
}
</style>
