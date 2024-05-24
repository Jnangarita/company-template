<template>
  <a
    @click.prevent="goToAnotherScreen(router, link)"
    class="item-nav display-flex"
  >
    <span>
      <i :class="icon"></i>
      {{ title }}
    </span>
  </a>
</template>

<script setup>
import { goToAnotherScreen } from "@/util/functions";
import { useRouter } from "vue-router";

const props = defineProps({
  icon: { type: String, default: "" },
  link: { type: String, default: "#" },
  title: { type: String, required: true },
});

const router = useRouter();
</script>

<style scoped>
.item-nav {
  padding: 2rem 0rem 0rem 1rem;
}
</style>