<template>
  <div class="modal" :url="this.url">
    <img :src="this.url" />
  </div>
</template>

<script>
export default {
  name: "MyModal",
  data() {
    return {
      url: ""
    };
  }
};
</script>

<style>
.modal {
  color: #fff;
  position: fixed;
  z-index: 1000;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
}
</style>
