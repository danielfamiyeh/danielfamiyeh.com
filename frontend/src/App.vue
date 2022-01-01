<template>
  <div class="h-100">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Navbar from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar }
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
  /* Main colors */
  --pale-gray: #dac4c4;
  --persian-plum: #d10829;
  --rose-taupe: #855a5c;
  --bg-main: #111;

  /* Scrollbar colors*/
  --scrollbar-thumb: #8f0018;
  --scrollbar-thumb-hover: #6b0012;
}

::-webkit-scrollbar {
  box-shadow: inset 0 0 5px rgb(64, 64, 64);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

a {
  transition: color 0.15s ease-in-out;
}

body {
  background: var(--bg-main) !important;
}

button {
  color: var(--persian-plum);
  background: none;
  border: none;
}

button:hover {
  color: var(--rose-taupe);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Vidaloka;
}

img {
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
}

/* Animations */
@keyframes fadeInAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes horizontalScrollInAnim {
  0% {
    max-width: 0%;
  }

  100% {
    max-width: 200%;
  }
}

@keyframes verticalScrollInAnim {
  0% {
    opacity: 0;
    max-height: 0%;
  }

  75% {
    opacity: 1;
  }

  100% {
    max-height: 200%;
  }
}

@keyframes fadeInAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.horizontal-scroll-in {
  animation: horizontalScrollInAnim 1.5s ease-in;
  overflow-x: hidden;
}

.vertical-scroll-in {
  animation: verticalScrollInAnim 1.5s ease-in;
  overflow-y: hidden;
}

.fade-in {
  animation: fadeInAnim 1s ease-in;
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

.pale-grey {
  color: var(--pale-gray);
}

.persian-plum {
  color: var(--persian-plum);
}

.italic {
  font-style: italic;
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
