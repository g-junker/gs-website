<template>
  <header class="header-blue">
    <div class="header-blue-container container">
      <router-link to="/">
        <img class="header-blue-logo" src="@/assets/logo/logo-white-blue.png" alt="logo Gonzaga Sampaio">
      </router-link>
      <label for="menu-toggle" class="responsive-menu"><i class="fas fa-bars fa-2x"></i></label>
      <input type="checkbox" id="menu-toggle">
      <div class="nav-wrapper">
        <ul class="nav">
            <router-link to="/quem-somos"><li>Quem Somos</li></router-link>
            <router-link to="/empreendimentos"><li>Empreendimentos</li></router-link>
            <router-link to="/fale-conosco"><li>Fale Conosco</li></router-link>
            <router-link to="/blog"><li>Blog</li></router-link>
        </ul>     
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderBlue'
}
</script>

<style>
.header-blue {
    background: var(--main-color);
    width: 100%;
    height: 75px;
}
.header-blue-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: .5em 0;
}

.header-blue-logo {
  max-width: 220px;
}

.nav-wrapper {
  display: flex;

  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

.nav li {
  text-transform: uppercase;
  font-size: 0.8em;
  color: #FFF;
  font-weight: 500;
  padding: 0;
  margin: 0 1em;
  transition: 0.5s;
  position: relative;
}

.nav li::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  top: 100%;
  left: 0;
  background: #FFF;
  transition: transform 0.3s;
  transform: scaleX(0);
  transform-origin: center;
}

.nav li:hover::after {
  transform: scaleX(1);
  transform-origin: center;
}

.responsive-menu {
  color: #FFF;
  text-align: right;
  display: none;
}

#menu-toggle {
  display: none;
}

@media only screen and (max-width: 850px) {
  .header-blue-container {
    justify-content: space-around;
  }
}

@media only screen and (max-width: 600px) {

  .responsive-menu {
    display: block;
    cursor: pointer;
    margin-top: 1em;
    z-index: 1;
  }

  .header-blue-container {
    justify-content: space-between;
  }

  .nav-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: var(--main-color);
    height: 100vh;
    width: 60vw;
    display: none;
  }

  .nav {
    display: block;
    margin-top: 2em;
    padding-top: 1em;
  }
  
  .nav li {
    margin: 2.5em 1.5em;
  }

  #menu-toggle:checked + .nav-wrapper {
    display: block;
  }
}

</style>