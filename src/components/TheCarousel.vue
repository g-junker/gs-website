<template>
  <div class="carousel__container">
    <transition-group name="fade">
      <div v-for="i in [currentIndex]" :key="i">
        <router-link :to="{ name: currentLink }" class="c__super-wrapper">
          <div class="c__wrapper">
            <img
              :src="currentImg"
              class="c-img"
              :class="currentIndex % 2 === 0 ? 'c-img--left' : 'c-img--right'"
            />
          </div>
          <div class="carousel__content  container">
            <span class="carousel__content-title">{{ currentTitle }}</span>
            <span class="carousel__content-text">{{ currentText }}</span>
            <button class="button-white">
              Conheça <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </router-link>
      </div>
    </transition-group>
    <div class="carousel__control">
      <a @click="prev" href="#"
        ><img class="carousel__control-back" src="@/assets/svg/back.svg"
      /></a>
      <a @click="next" href="#"
        ><img class="carousel__control-next" src="@/assets/svg/next.svg"
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
          link: "ParqueDaLagoa"
        },
        {
          image: require("@/assets/images/home-slide-2.jpg"),
          title: "Terroir Villaggio",
          text: "São Joaquim, SC",
          link: "HomePage"
        }
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted() {
    this.startSlide();
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    startSlide() {
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(this.next, 8000);
    },
    next() {
      if (this.currentIndex == this.slides.length - 1) this.currentIndex = 0;
      else this.currentIndex += 1;
      this.startSlide();
    },
    prev() {
      if (this.currentIndex == 0) this.currentIndex = this.slides.length - 1;
      else this.currentIndex -= 1;
      this.startSlide();
    }
  },
  computed: {
    currentImg() {
      return this.slides[this.currentIndex].image;
    },
    currentTitle() {
      return this.slides[this.currentIndex].title;
    },
    currentText() {
      return this.slides[this.currentIndex].text;
    },
    currentLink() {
      return this.slides[this.currentIndex].link;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: all 1.5s ease;
  overflow: hidden;
  visibility: visible;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

.c__super-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.c__wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
}

.c-img {
  width: 115%;
  min-width: 700px;
  height: 100%;
  object-fit: cover;
  animation-duration: 16s;
  filter: brightness(85%);
}

.c-img--left {
  animation-name: img-slide-left;
}

.c-img--right {
  animation-name: img-slide-right;
}

@keyframes img-slide-left {
  0% {
    transform: translateX(-12%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes img-slide-right {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-12%);
  }
}

.carousel__container {
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
}

.carousel {
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.7s;
}

.carousel__content {
  position: absolute;
  width: 85%;
  margin: auto;
  color: #fff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
}

.carousel__content-title {
  display: block;
  max-width: 400px;
  font-size: calc(40px + (64 - 40) * ((100vw - 450px) / (1920 - 450)));
  font-weight: 700;
  line-height: 1em;
}

.carousel__content-text {
  display: block;
  margin: 0.5em 0 1.5em;
  font-size: 1.3em;
  font-weight: 500;
}

.carousel__control {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel__control-back,
.carousel__control-next {
  width: 3vw;
  min-width: 25px;
  padding: 0 0.75em;
  opacity: 0.75;
}

@media only screen and (max-width: 720px) {
  .carousel__content {
    width: 70%;
  }
}
</style>
