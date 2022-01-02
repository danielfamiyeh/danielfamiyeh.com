<template>
  <div
    class="side-text-container vertical-scroll-in col-3 d-none d-lg-block vh-75"
  >
    <h1
      class="side-text"
      :style="`font-size: ${fontSize}`"
      v-html="innerHtml"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sidetext',
  props: {
    innerHtml: { type: String, required: true },
    fontSize: { type: String, default: '6rem' }
  },
  setup() {
    return {
      parser: new DOMParser()
    };
  }
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
  user-select: none;
}
</style>
