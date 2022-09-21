import { defineStore } from "pinia";

export const matchesStore = defineStore("matches_store", {
  state: () => ({
    results: 10,
    fetchCount: 0,
    searchGender: "female",
    searchRemains: 5,
    love: 7,
    messages: 3,
    undoActions: 6,
    actions: 0,
    maxActions: -1,
    matches: {
      people: [],
      previous: [],
      previousActions: {},
    },
    config: {
      actions: {
        0: "dislike",
        1: "like",
        2: "love",
        3: "undo",
        4: "message",
      },
      actionsLabel: {
        dislike: 0,
        like: 1,
        love: 2,
        undo: 3,
        message: 4,
      },
    },
  }),
  getters: {},
  actions: {
    next(actionType, withoutPrevious = false) {
      this.actions++;

      const person = this.matches.people.shift();

      if (withoutPrevious) {
        return;
      }

      this.addPreviousPeople(person, actionType);
    },
    addPreviousPeople(person, type) {
      this.matches.previousActions[person.login.uuid] = type;

      this.matches.previous.push(person);
    },
    undo() {
      if (!this.matches.previous.length || !this.undoActions) {
        return;
      }

      if (this.actions >= this.maxActions && this.maxActions !== -1) {
        return;
      }

      const person = this.matches.previous.pop();

      if (
        this.matches.previousActions[person.login.uuid] ===
        this.config.actionsLabel.love
      ) {
        this.love++;

        if (this.maxActions !== -1) {
          this.maxActions--;
        }

        this.actions--;
      }

      delete this.matches.previousActions[person.login.uuid];

      this.matches.people.unshift(person);

      this.undoActions--;
    },
  },
});
