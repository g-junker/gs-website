<template>
  <header
    class="header"
    :class="{
      'header--transparent': isTransparent,
      'header--blue': isBlue
    }"
  >
    <div class="header__container container">
      <router-link :to="{ name: 'HomePage' }">
        <img
          v-if="isLogoWhite"
          class="header__logo"
          src="@/assets/logo/logo-white-blue.png"
          alt="logo Gonzaga Sampaio"
        />
        <img
          v-else
          class="header__logo"
          src="@/assets/logo/logo-color.png"
          alt="logo Gonzaga Sampaio"
        />
      </router-link>
      <nav class="header__nav">
        <ul class="nav">
          <li class="nav__item">
            <router-link :to="{ name: 'WhoWeAre' }" class="nav__link"
              >Quem Somos</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'OurProjects' }" class="nav__link">
              Empreendimentos
            </router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'ContactUs' }" class="nav__link"
              >Fale Conosco</router-link
            >
          </li>
          <li class="nav__item">
            <router-link :to="{ name: 'Blog' }" class="nav__link"
              >Blog</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="nav__page-background" @click="navSlide"></div>
      <div
        class="burger"
        :class="{
          'toggle-burger': burgerActive,
          'burger--blue': !isTransparent
        }"
        @click="navSlide"
      >
        <div class="burger__line-1"></div>
        <div class="burger__line-2"></div>
        <div class="burger__line-3"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    isLogoWhite: {
      type: Boolean,
      default: false
    },
    isTransparent: {
      type: Boolean,
      default: false
    },
    isBlue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      burgerActive: false
    };
  },
  mounted() {
    document.body.style.overflow = "auto";
  },
  methods: {
    navSlide() {
      const nav = document.querySelector(".header__nav");
      const background = document.querySelector(".nav__page-background");
      const navItems = document.querySelectorAll(".nav__item ");

      // Toggle Nav
      nav.classList.toggle("header__nav--active");
      background.classList.toggle("nav__page-background--active");

      // Animate Links
      navItems.forEach((item, index) => {
        item.style.animation
          ? (item.style.animation = "")
          : (item.style.animation = `navLinkFade 0.7s ease forwards ${index /
              5}s`);
      });
      // Burger Animation
      this.burgerActive = !this.burgerActive;

      // No scroll body
      if (this.burgerActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }
};
</script>

<style>
.no-scroll {
  overflow: hidden;
}

.header {
  width: 100%;
  color: var(--main-color);
  box-shadow: -10px 0px 10px #00000033;
}

.header--transparent {
  position: absolute;
  z-index: 1;
  height: 125px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(18, 34, 50, 0.6) 0%,
    rgba(18, 34, 50, 0) 100%
  );
  color: #fff;
  box-shadow: none;
}

.header--blue {
  background-color: var(--main-color);
  color: #fff;
}

.header__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5em 0;
  align-items: center;
}

.header__logo {
  width: 60vw;
  max-width: 220px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  list-style-type: none;
}

.nav__item {
  position: relative;
  margin: 0 1em;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 500;
  transition: 0.5s;
}

.nav__link {
  padding: 1em 0;
}

.nav__item::after {
  position: absolute;
  width: 100%;
  height: 1px;
  top: 100%;
  left: 0;
  content: "";
  background: var(--main-color);
  transition: transform 0.3s;
  transform: scaleX(0);
  transform-origin: center;
}

.nav__item:hover::after {
  transform: scaleX(1);
  transform-origin: center;
}

.nav--white--font {
  color: #fff;
}

.header--transparent .nav__item::after {
  background: #fff;
}

.burger {
  z-index: 6;
  display: none;
  cursor: pointer;
}

.burger > div {
  width: 30px;
  height: 4px;
  background-color: #fff;
  margin: 6px;
  transition: all 0.3s ease;
}

.burger--blue > div {
  background-color: var(--main-color);
}

.nav__page-background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.nav__page-background--active {
  opacity: 1;
}

@media screen and (max-width: 900px) {
  .header {
    overflow-x: hidden;
  }
  .header__container {
    justify-content: space-between;
    overflow-x: hidden;
  }
  .header__nav {
    position: fixed;
    padding-left: 1em;
    padding-top: 5em;
    right: 0;
    top: 0;
    background-color: var(--main-color);
    height: 100vh;
    width: 70%;
    max-width: 300px;
    z-index: 5;
    transform: translateX(100%);
  }
  .nav {
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    height: 100%;
    color: #fff;
  }

  .nav__item {
    opacity: 0;
    padding: 1em;
  }

  .nav__item::after {
    display: none;
  }

  .burger {
    display: block;
  }
}

.header__nav--active {
  transform: translateX(0%);
  transition: transform 0.5s ease-in;
}

.nav__page-background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 4;
}

.nav__page-background--active {
  visibility: visible;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle-burger .burger__line-1 {
  background-color: #fff;
  transform: rotate(-45deg) translate(-6px, 8px);
}

.toggle-burger .burger__line-2 {
  background-color: #fff;
  opacity: 0;
}

.toggle-burger .burger__line-3 {
  background-color: #fff;
  transform: rotate(45deg) translate(-6px, -8px);
}
</style>
