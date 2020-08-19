<template>
  <div class="gallery" data-aos="fade-up" data-aos-duration="1500">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery__thumbnail"
    >
      <img :src="image" class="gallery__thumbnail-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      images: [
        require("@/assets/images/lagoa/gallery/lagoa (1).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (2).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (3).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (4).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (5).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (6).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (7).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (8).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (9).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (10).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (11).jpg"),
        require("@/assets/images/lagoa/gallery/lagoa (12).jpg")
      ]
    };
  }
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto 4em;
}

.gallery__thumbnail {
  width: 25%;
  padding: 0 2px;
  box-sizing: border-box;
}

.gallery__thumbnail-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

@media only screen and (max-width: 1000px) {
  .gallery__thumbnail {
    width: 33.333%;
  }

  .gallery__thumbnail-image {
    height: 200px;
  }
}

@media only screen and (max-width: 650px) {
  .gallery__thumbnail {
    width: 50%;
  }
}

@media only screen and (max-width: 650px) {
  .gallery__thumbnail-image {
    height: 150px;
  }
}
</style>
