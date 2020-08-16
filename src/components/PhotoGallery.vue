<template>
  <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="thumbnail">
          <img :src="image">
      </div>
  </div>
</template>

<script>

export default {
    name: 'PhotoGallery',
    data() {
        return {
            images: [
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg'),
                require('@/assets/images/empr-lagoa.jpg')
            ]
        }
    }
}
</script>

<style>
.gallery {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
}

.thumbnail {
    max-width: 225px;
    padding: 0 2px;
}
</style>