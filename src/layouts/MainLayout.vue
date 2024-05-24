<template>
  <div class="sidenav">
    <a @click.prevent="goToAnotherScreen(router, 'dashboard')">
      <span class="title-nav display-flex">
        <i class="las la-futbol"></i>{{ $t("message.template") }}
      </span>
    </a>
    <hr />
    <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { goToAnotherScreen } from "@/util/functions";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import EssentialLink from "@/components/EssentialLink.vue";

const router = useRouter();
const { t } = useI18n();

const linksList = [
  {
    icon: "las la-tachometer-alt",
    link: "dashboard",
    title: t("message.dashboard"),
  },
  {
    icon: "las la-cog",
    link: "dashboard",
    title: t("message.component"),
  },
];
</script>

<style scoped>
.sidenav {
  background-color: var(--primary);
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  width: 15rem;
  z-index: 1;
}

.sidenav a {
  color: white;
  text-decoration: none;
}

.sidenav hr {
  background: rgba(255, 255, 255, 0.4);
  border: none;
  height: 0.01rem;
  margin-bottom: 0rem;
  margin-top: 0rem;
  width: 85%;
}

.title-nav {
  font-size: 2rem;
  justify-content: center;
  padding: 1.5rem 0rem 1.5rem 0rem;
}

.main {
  margin-left: 15rem;
  padding: 0px 10px;
}
</style>