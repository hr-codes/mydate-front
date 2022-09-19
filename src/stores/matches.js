import { defineStore } from "pinia";

export const matchesStore = defineStore("matches_store", {
  state: () => ({
    results: 10,
    fetchCount: 0,
    searchGender: "female",
    searchRemains: 5,
    step: 0,
    star: 5,
    boost: 9,
    undo: 3,
    actions: -1,
  }),
  getters: {
    getStep() {
      return this.step;
    },
  },
  actions: {
    setStep(payload) {
      this.step = payload;
    },
  },
});
