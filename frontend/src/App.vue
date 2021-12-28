<template>
  <div class="h-100">
    <div id="nav">
      <span v-for="(route, i) in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }} </router-link>
        <span v-if="i !== routes.length - 1"> | </span>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { routes } from '@/router';

export default defineComponent({
  name: 'App',
  data() {
    return {
      routes
    };
  }
});
</script>

<style>
@font-face {
  font-family: Oranienbaum;
  src: url('../src/assets/fonts/Oranienbaum.ttf') format('truetype');
}

@font-face {
  font-family: Vidaloka;
  src: url('../src/assets/fonts/Vidaloka.ttf') format('truetype');
}

:root {
  --pale-gray: #dac4c4;
  --persian-plum: #d10829;
  --rose-taupe: #855a5c;
  --bg-main: #111;
}

body {
  background: var(--bg-main) !important;
}

.pale-grey {
  color: var(--pale-gray);
}

.persian-plum {
  color: var(--persian-plum);
}

.italic {
  font-style: italic;
}

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--pale-gray);
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Vidaloka;
}

button {
  color: var(--persian-plum);
  background: none;
  border: none;
}

button:hover {
  color: var(--rose-taupe);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--pale-gray);
}

#nav a.router-link-exact-active {
  color: var(--persian-plum);
}

.stroke-white {
  color: var(--bg-main);
  text-shadow: -1px -1px 0 var(--pale-gray), 1px -1px 0 var(--pale-gray),
    -1px 1px 0 var(--pale-gray), 1px 1px 0 var(--pale-gray);
}

.stroke-plum {
  color: var(--bg-main);
  text-shadow: -1px -1px 0 var(--persian-plum), 1px -1px 0 var(--persian-plum),
    -1px 1px 0 var(--persian-plum), 1px 1px 0 var(--persian-plum);
}

.box-shadow {
  box-shadow: 10px 20px;
}

.div-with-bg-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
