<template>
  <header class="header-color">
    <div class="header-color-container container">
      <router-link to="/">
        <img class="header-logo" src="@/assets/logo/logo-color.png" alt="logo Gonzaga Sampaio">
      </router-link>
      <ul class="nav-color">
          <router-link to="/quem-somos"><li>Quem Somos</li></router-link>
          <router-link to="/empreendimentos"><li>Empreendimentos</li></router-link>
          <router-link to="/fale-conosco"><li>Fale Conosco</li></router-link>
          <router-link to="/blog"><li>Blog</li></router-link>
      </ul>      
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderColor'
}
</script>

<style>
.header-color {
    width: 100%;
    box-shadow: -10px 0px 10px #00000033;
}

.header-color-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: .5em 0;
}

.header-color-logo {
  max-width: 220px;
}
.nav-color {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

.nav-color li {
  text-transform: uppercase;
  font-size: 0.8em;
  color: var(--main-color);
  font-weight: 600;
  padding: 0;
  margin: 0 1em;
  transition: 0.5s;
  position: relative;
}

.nav-color li::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  top: 100%;
  left: 0;
  background: var(--main-color);
  transition: transform 0.3s;
  transform: scaleX(0);
  transform-origin: center;
}

.nav-color li:hover::after {
  transform: scaleX(1);
  transform-origin: center;
}

@media only screen and (max-width: 800px) {
  .header-color-container {
    justify-content: space-evenly;
  }
}

@media only screen and (max-width: 600px) {
  .nav-color {
    display: none;
  }
}

</style>