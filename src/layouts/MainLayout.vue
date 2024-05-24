<template>
  <div class="sidenav">
    <!-- Aquí va tu menú de navegación -->
    <a @click.prevent="goToAnotherScreen(router, 'dashboard')">
      <span class="title-nav display-flex">
        <i class="las la-futbol"></i>{{ $t("message.template") }}
      </span>
    </a>
    <hr />
    <a @click.prevent="goToAnotherScreen(router, 'dashboard')">
      <span class="item-nav display-flex">
        <i class="las la-tachometer-alt"></i>
        {{ $t("message.dashboard") }}
      </span>
    </a>
  </div>
  <div class="main">
    <!-- Este es el punto donde se renderizan las rutas hijas -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { goToAnotherScreen } from "@/util/functions";
import { useRouter } from "vue-router";

const router = useRouter();
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

.item-nav {
  padding: 1.5rem 0rem 1.5rem 1rem;
}

.main {
  margin-left: 15rem;
  padding: 0px 10px;
}
</style>