<template>
  <div id="nav">
    <span class="pb-2 d-block" style="border-bottom: 1px solid grey">
      <span v-for="(route, i) in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }} </router-link>
        <span v-if="i !== routes.length - 1"> | </span>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { routes } from '../../router';

export default defineComponent({
  name: 'Navbar',
  data() {
    return { routes };
  }
});
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--pale-gray);
  text-decoration: none !important;
}

#nav a.router-link-exact-active {
  color: var(--persian-plum);
}

#nav a:hover {
  color: var(--rose-taupe);
}
</style>
