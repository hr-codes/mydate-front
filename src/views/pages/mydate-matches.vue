<template>
  <div class="h-100 d-flex align-items-center justify-content-center">
    <div>
      <MatchCard />

      <ActionsCard @message-modal="showMessageModal" />

      <MyDateModal
        modalId="message-modal"
        modalSize="none"
        title="Deixe uma mensagem"
      >
        <div class="p-2">
          <p class="small text-secondary">
            <strong class="text-danger">Atenção:</strong> Mensagens enviadas são
            definitivas e não são revertidas.
          </p>

          <textarea rows="6" class="form-control mt-0"></textarea>

          <button
            class="btn btn-md mt-2 my-date-button-blue d-flex ms-auto"
            @click="submitMessage"
          >
            Enviar mensagem
          </button>
        </div>
      </MyDateModal>
    </div>
  </div>
</template>

<script>
import MatchCard from "@/components/MatchCard.vue";
import ActionsCard from "@/components/ActionsCard.vue";
import MyDateModal from "@/components/global/MyDateModal.vue";
import { Modal } from "bootstrap";
import { matchesStore } from "@/stores/matches";

export default {
  setup() {
    const matchesState = matchesStore();

    return { matchesState };
  },
  data() {
    return {
      modal: "",
    };
  },
  components: {
    MatchCard,
    ActionsCard,
    MyDateModal,
  },
  methods: {
    showMessageModal() {
      this.modal.show();
    },
    submitMessage() {
      this.modal.hide();

      this.matchesState.messages--;

      this.matchesState.next(this.matchesState.config.actionsLabel.like, true);
    },
  },
  mounted() {
    this.modal = new Modal(document.getElementById("message-modal"), {});
  },
};
</script>
