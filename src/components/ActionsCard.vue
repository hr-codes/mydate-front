<template>
  <div id="match-actions" class="row my-0 mt-4 pt-2 mb-5 mx-auto">
    <div class="btn rounded shadow-sm col m-auto p-2 undo" @click="undo">
      <span class="counter shadow-sm">{{ matchesState.undoActions }}</span>

      <img src="@/assets/icons/undo.png" alt="" />
    </div>

    <div
      class="btn rounded shadow-sm col m-auto p-2 ms-3 dislike"
      @click="action(matchesState.config.actionsLabel.dislike)"
    >
      <img src="@/assets/icons/dislike.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col-3 m-auto mx-3 p-2 love" @click="love">
      <span class="counter shadow-sm">{{ matchesState.love }}</span>
      <img src="@/assets/icons/match.png" alt="" />
    </div>

    <div
      class="btn rounded shadow-sm col m-auto p-2 me-3 like"
      @click="action(matchesState.config.actionsLabel.like)"
    >
      <img src="@/assets/icons/like.png" alt="" />
    </div>

    <div class="btn rounded shadow-sm col m-auto p-2 messages" @click="message">
      <span class="counter shadow-sm">{{ matchesState.messages }}</span>

      <img src="@/assets/icons/message.png" alt="" />
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
    action(actionType) {
      if (
        this.matchesState.maxActions !== -1 &&
        this.matchesState.actions >= this.matchesState.maxActions
      ) {
        return;
      }

      this.matchesState.next(actionType);
    },
    love() {
      if (this.matchesState.love <= 0) {
        return;
      }

      this.matchesState.next(2);

      this.matchesState.love -= 1;

      if (this.matchesState.maxActions !== -1) {
        this.matchesState.maxActions += 1;
      }
    },
    undo() {
      this.matchesState.undo();
    },
    message() {
      this.$emit("message-modal");
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
    background-color: $second-color;

    transition: all 200ms ease;

    .counter {
      transform: translateX(18px) translateY(62px);
      color: $second-color;
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
  .messages {
    img {
      width: 20px;
    }
  }

  .undo {
    .counter {
      transform: translateX(0px) translateY(26px);
      color: $fifth-color;
      width: 20px;
      height: 20px;
      font-size: 0.85rem;
    }

    &:hover {
      background-color: $fifth-color;
    }
  }

  .dislike {
    &:hover {
      background-color: $sixth-color;
    }
  }

  .like {
    &:hover {
      background-color: $third-color;
    }
  }

  .messages {
    .counter {
      transform: translateX(0px) translateY(26px);
      color: $seventh-color;
      width: 20px;
      height: 20px;
      font-size: 0.85rem;
    }

    &:hover {
      background-color: $seventh-color;
    }
  }
}
</style>
