<template>
  <div
    class="modal fade"
    :class="modalClass"
    :id="modalId"
    tabindex="-1"
    aria-labelledby="sample-360-modal-component-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" :class="modalSize">
      <div class="modal-content border-0 rounded-3" :class="contentClass">
        <div v-if="title" class="modal-header">
          <h5 class="modal-title" id="sample-360-modal-component-label">
            {{ title }}
          </h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>

        <div class="modal-body" :class="noPadding ? 'p-0' : ''">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      toggle_id: "",
    };
  },
  props: {
    modalId: {
      required: true,
      type: String || Number,
      validator(value) {
        return value || false;
      },
    },
    title: {
      default() {
        return "";
      },
    },
    noPadding: {
      default() {
        return false;
      },
      validator(value) {
        return [true, false].includes(value);
      },
    },
    modalSize: {
      required: true,
      type: String,
      default() {
        return "none";
      },
      validator(value) {
        return ["modal-sm", "none", "modal-lg", "modal-xl"].includes(value);
      },
    },
    modalClass: {},
    contentClass: {},
  },
};
</script>
