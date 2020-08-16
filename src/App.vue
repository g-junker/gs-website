<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from './components/TheFooter';
import '@/assets/style.css'

export default {
  name: 'App',
  components: {
    TheFooter
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
</style>

