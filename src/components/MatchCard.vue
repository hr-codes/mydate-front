<template>
  <div v-if="render">
    <div v-for="(person, index) in data" :key="index">
      <Transition>
        <div
          v-if="index === matchesState.getStep"
          class="match-card bg-white p-2 rounded-3 shadow"
        >
          <div class="w-100 h-100 overflow-hidden rounded-2 position-relative">
            <img :src="person.picture.large" alt="" class="w-100 rounded-2" />

            <div class="match-info ps-4 pt-5">
              <h2 class="text-white fw-bold pt-3">
                {{ person.name.first }} {{ person.name.last }}
              </h2>

              <h5 class="text-white">
                {{ person.dob.age }} anos,
                {{ person.location.country }}
                ({{ person.location.city }})
              </h5>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>

  <div v-else class="match-card bg-white p-2 rounded-3 shadow">
    <div
      class="w-100 h-100 overflow-hidden rounded-2 position-relative d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { matchesStore } from "@/stores/matches";

export default {
  inject: ["$http"],
  setup() {
    const matchesState = matchesStore();

    return { matchesState };
  },
  data() {
    return {
      data: [],
      render: false,
    };
  },
  watch: {
    "matchesState.step": {
      handler(value) {
        if (
          value ===
          this.matchesState.fetchCount - this.matchesState.searchRemains
        ) {
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
          `https://randomuser.me/api/?gender=${this.matchesState.searchGender}&inc=gender,name,location,picture,dob&results=${this.matchesState.results}`
        )
        .then((res) => {
          this.matchesState.fetchCount += res.data.info.results;

          if (this.data.length) {
            this.data = [...this.data, ...res.data.results];

            return;
          }

          this.data = res.data.results;

          this.render = true;
        });
    },
  },
  async created() {
    await this.getCrush();
  },
};
</script>

<style lang="scss">
$width: 390px;
$height: 530px;

.match-card {
  width: $width;
  height: $height;
  position: absolute;
  transform: translateX(-190px) translateY(-340px);

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

.v-enter-active {
  transform: translateX(900px) translateY(-340px);
  transition: all 700ms linear;
  opacity: 0;
}

.v-enter-to {
  transform: translateX(0px) translateY(-340px);
  transition: all 700ms linear;
  opacity: 1;
}

.v-leave-from {
  transform: translateX(0px) translateY(-340px);

  transition: all 700ms linear;
  opacity: 1;
}

.v-leave-to {
  transform: translateX(-900px) translateY(-340px);
  transition: all 700ms linear;
  opacity: 0;
}
</style>
