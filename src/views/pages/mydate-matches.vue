<template>
  <div class="h-100 d-flex align-items-center justify-content-center">
    <div>
      <MatchCard />

      <ActionsCard />
    </div>
  </div>
</template>

<script>
import MatchCard from "@/components/MatchCard.vue";
import ActionsCard from "@/components/ActionsCard.vue";

export default {
  components: {
    MatchCard,
    ActionsCard,
  },
};
</script>
