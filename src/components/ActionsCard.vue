<template>
  <div id="match-actions" class="row my-0 mt-4 pt-2 mb-5 mx-auto">
    <div class="btn rounded shadow-sm col m-auto p-2 undo" @click="up">
      <span class="counter shadow-sm">{{ matchesState.undo }}</span>

      <img src="@/assets/icons/undo.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col m-auto p-2 ms-3 dislike" @click="up">
      <img src="@/assets/icons/dislike.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col-3 m-auto mx-3 p-2 love" @click="star">
      <span class="counter shadow-sm">{{ matchesState.star }}</span>
      <img src="@/assets/icons/love.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col m-auto p-2 me-3 like" @click="up">
      <img src="@/assets/icons/like.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col m-auto p-2 boost" @click="up">
      <span class="counter shadow-sm">{{ matchesState.boost }}</span>

      <img src="@/assets/icons/boost.png" alt="" />
    </div>
  </div>
</template>

<script>
import { matchesStore } from "@/stores/matches";

export default {
  setup() {
    const matchesState = matchesStore();

    return { matchesState };
  },
  methods: {
    up() {
      if (
        this.matchesState.actions !== -1 &&
        this.matchesState.getStep >= this.matchesState.actions
      ) {
        return;
      }

      this.matchesState.setStep(this.matchesState.getStep + 1);
    },
    star() {
      if (this.matchesState.star <= 0) {
        return;
      }

      this.matchesState.setStep(this.matchesState.getStep + 1);

      this.matchesState.star -= 1;

      if (this.matchesState.actions !== -1) {
        this.matchesState.actions += 1;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";

#match-actions {
  width: 350px;
  height: 110px;
  position: fixed;
  transform: translateX(-170px) translateY(200px);

  .btn {
    background-color: #fff;

    &:hover {
      img {
        filter: invert(100%);
      }
    }
  }

  .counter {
    position: absolute;
    background-color: #fff;
    font-weight: bold;
    width: 28px;
    height: 28px;
    border-radius: 50px;
  }

  .love {
    background-color: rgb(255, 189, 47);
    transition: all 200ms ease;

    .counter {
      transform: translateX(18px) translateY(62px);
      color: rgb(255, 189, 47);
    }

    img {
      filter: invert(100%);
      width: 65px;
    }

    &:hover {
      transform: translateY(-5px);
      transition: all 200ms ease;
    }
  }

  .dislike,
  .like {
    img {
      width: 40px;
    }
  }

  .undo,
  .boost {
    img {
      width: 20px;
    }
  }

  .undo {
    .counter {
      transform: translateX(0px) translateY(26px);
      color: rgb(247, 127, 72);
      width: 20px;
      height: 20px;
      font-size: 0.85rem;
    }

    &:hover {
      background-color: rgb(247, 127, 72);
    }
  }

  .dislike {
    &:hover {
      background-color: $second-color;
    }
  }

  .like {
    &:hover {
      background-color: $third-color;
    }
  }

  .boost {
    .counter {
      transform: translateX(0px) translateY(26px);
      color: rgb(103, 131, 221);
      width: 20px;
      height: 20px;
      font-size: 0.85rem;
    }

    &:hover {
      background-color: rgb(103, 131, 221);
    }
  }
}
</style>
