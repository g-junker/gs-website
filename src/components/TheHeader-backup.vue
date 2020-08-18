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
  }
};
</script>

<style>
.header {
  width: 100%;
  color: var(--main-color);
  box-shadow: -10px 0px 10px #00000033;
}

.header--transparent {
  position: absolute;
  z-index: 2;
  height: 200px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(18, 34, 50, 0.5) 0%,
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
}

.header__logo {
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

@media only screen and (max-width: 850px) {
  .header__container {
    justify-content: space-around;
  }
}

@media only screen and (max-width: 600px) {
  .header__container {
    justify-content: space-between;
  }
  .nav {
    display: none;
  }
}
</style>
