<template>
  <button
    :disabled="isLoading"
    class="btn"
    @click="handleClick"
  >
    <span v-if="isLoading">
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </span>
    <span v-else> {{ txt }} </span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
    default: "",
  },
  txt: {
    type: String,
    default: "Botón",
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (!props.isLoading) {
    event.preventDefault();
    emit("click", event);
  }
};
</script>