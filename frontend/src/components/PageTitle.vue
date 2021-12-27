<template>
  <div class="page-title h-100 col-xs-12 col-lg-4">
    <div class="top-row h-50 stroke-plum">
      <h1 v-html="innerHtml.top" />
    </div>
    <div class="top-row h-50">
      <h1 v-html="innerHtml.bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    innerHtml: Object
  }
});
</script>

<style scoped>
.page-title h1 {
  font-size: 8em;
  user-select: none;
}
</style>
