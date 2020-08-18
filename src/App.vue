<template>
  <div id="app">
    <div class="content">
      <transition name="fade-page" mode="out-in">
        <router-view />
      </transition>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import "@/assets/style.css";

export default {
  name: "App",
  components: {
    TheFooter
  }
};
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
}
.content {
  flex: 1;
}

.fade-page-enter-active,
.fade-page-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}

.fade-page-enter,
.fade-page-leave-active {
  opacity: 0;
}
</style>
