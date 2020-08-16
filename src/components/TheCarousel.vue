<template>
  <div class="carousel-container">
    <transition-group name="fade">
      <div v-for="i in [currentIndex]" :key="i">
        <div
          :style="{ 'background-image': 'url(' + currentImg + ')' }"
          class="carousel"
        >
          <div class="carousel-content">
            <span class="carousel-content-title">{{ currentTitle }}</span>
            <span class="carousel-content-text">{{ currentText }}</span>
            <a :href="currentLink">
              <button class="button-white">
                Conheça <i class="fas fa-long-arrow-alt-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </transition-group>
    <div class="controls">
      <a @click="prev" href="#"
        ><img class="control-back" src="@/assets/svg/back.svg"
      /></a>
      <a @click="next" href="#"
        ><img class="control-next" src="@/assets/svg/next.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCarousel",
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/home-slide-1.jpg"),
          title: "Parque da Lagoa",
          text: "Imbituba, SC",
          link: "#"
        },
        {
          image: require("@/assets/images/home-slide-2.jpg"),
          title: "Terroir Villaggio",
          text: "São Joaquim, SC",
          link: "#"
        }
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 8000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length]
        .image;
    },
    currentTitle() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length]
        .title;
    },
    currentText() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length].text;
    },
    currentLink() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length].link;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

.carousel-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
}

.carousel {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.7s;
  flex: 1;
}

.carousel-content {
  width: 85%;
  margin: auto;
  color: #fff;
}

.carousel-content-title {
  margin-top: 2em;
  display: block;
  font-size: calc(32px + (64 - 32) * ((100vw - 450px) / (1920 - 450)));
  font-weight: bold;
  line-height: 1em;
  max-width: 300px;
}

.carousel-content-text {
  display: block;
  margin: 0.5em 0 2em;
  font-size: 1.3em;
}

.controls {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.control-back,
.control-next {
  width: 3vw;
  min-width: 25px;
  padding: 0 0.75em;
  opacity: 0.75;
}

@media only screen and (max-width: 800px) {
  .carousel-content {
    max-width: 70%;
  }
}
</style>
