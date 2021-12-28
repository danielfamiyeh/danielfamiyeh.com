<template>
  <div
    class="side-text-container vertical-scroll-in col-3 d-none d-lg-block vh-75"
  >
    <h1 class="side-text" v-html="innerHtml" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sidetext',
  props: { innerHtml: String }
});
</script>

<style>
.side-text-container {
  overflow-x: hidden;
}

.side-text {
  margin-top: 51vh;
  margin-left: 5vw;
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: 6em;
  user-select: none;
}
</style>
