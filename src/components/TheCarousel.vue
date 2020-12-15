<template>
  <div class="carousel-container">
    <transition-group name="fade">
      <div v-for="i in [currentIndex]" :key="i">
        <router-link :to="{ name: currentLink }" class="carousel">
          <div class="carousel__image-container">
            <img
              :src="currentImg"
              :alt="'imagem do empreendimento ' + currentTitle"
              class="carousel__image"
              :class="
                currentIndex % 2 === 0 && currentMove
                  ? 'carousel__image--left'
                  : currentIndex % 2 !== 0 && currentMove
                  ? 'carousel__image--right'
                  : ''
              "
            />
          </div>
          <div class="carousel__content container">
            <span class="carousel__title">{{ currentTitle }}</span>
            <span class="carousel__subtitle">{{ currentSubtitle }}</span>
            <span
              v-if="currentText"
              class="carousel__text"
              data-aos="fade-right"
              data-aos-duration="1000"
              >{{ currentText }}</span
            >
            <button class="button" :class="{ 'button--white': currentMove }">
              {{ currentButton }} <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <span v-if="currentCopyright" class="carousel__copyright">{{
            currentCopyright
          }}</span>
        </router-link>
      </div>
    </transition-group>
    <div class="carousel__control">
      <a @click="prev" href="#"
        ><img
          class="carousel__control-back"
          src="@/assets/svg/back.svg"
          alt="previous"
      /></a>
      <a @click="next" href="#"
        ><img
          class="carousel__control-next"
          src="@/assets/svg/next.svg"
          alt="next"
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
          image: require("@/assets/images/home-slide-financ.jpg"),
          text:
            "Todos os nossos produtos são financiados direto pela  construtora",
          link: "OurProjects",
          move: false,
          button: "Conheça Nossos Imóveis",
          copyright: "Background photo created by ijeab"
        },
        {
          image: require("@/assets/images/home-slide-1.jpg"),
          title: "Parque da Lagoa",
          subtitle: "Imbituba, SC",
          link: "ParqueDaLagoa",
          move: true,
          button: "Conheça"
        },
        {
          image: require("@/assets/images/home-slide-2.jpg"),
          title: "Terroir Villaggio",
          subtitle: "São Joaquim, SC",
          link: "TerroirVillaggio",
          move: true,
          button: "Conheça"
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
      this.timer = setInterval(this.next, 9000);
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
    currentSubtitle() {
      return this.slides[this.currentIndex].subtitle;
    },
    currentText() {
      return this.slides[this.currentIndex].text;
    },
    currentLink() {
      return this.slides[this.currentIndex].link;
    },
    currentMove() {
      return this.slides[this.currentIndex].move;
    },
    currentButton() {
      return this.slides[this.currentIndex].button;
    },
    currentCopyright() {
      return this.slides[this.currentIndex].copyright;
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

.carousel-container {
  position: relative;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel__image-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
}

.carousel__image {
  width: 115%;
  min-width: 700px;
  height: 100%;
  object-fit: cover;
  animation-duration: 16s;
  filter: brightness(85%);
}

.carousel__image--left {
  animation-name: img-slide-left;
}

.carousel__image--right {
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

.carousel__content {
  position: absolute;
  width: 85%;
  margin: auto;
  color: #fff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
}

.carousel__title {
  display: block;
  max-width: 400px;
  font-size: calc(40px + (64 - 40) * ((100vw - 450px) / (1920 - 450)));
  font-weight: 700;
  line-height: 1em;
}

.carousel__subtitle {
  display: block;
  margin: 0.5em 0 1.5em;
  font-size: 1.3em;
  font-weight: 500;
}

.carousel__text {
  display: block;
  font-size: calc(30px + (48 - 30) * ((100vw - 450px) / (1920 - 450)));
  margin-bottom: 1.5em;
  max-width: 500px;
  font-weight: 700;
  line-height: normal;
  background-color: var(--main-color);
  padding: 0.5em;
}

.carousel__copyright {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5em;
  font-size: 0.6em;
  color: #fff;
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
