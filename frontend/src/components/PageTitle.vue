<template>
  <div class="page-title fade-in h-100 col-xs-12 col-lg-4">
    <div class="top-row h-50 stroke-plum">
      <h1
        v-html="innerHtml.top"
        :style="`font-size: ${getFontSize(innerHtml.top)}rem`"
      />
    </div>
    <div class="top-row h-50">
      <h1
        v-html="innerHtml.bottom"
        :style="`font-size: ${getFontSize(innerHtml.bottom)}rem`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      parser: new DOMParser()
    };
  },
  methods: {
    getFontSize(elemAsString: string) {
      const doc = this.parser.parseFromString(elemAsString, 'text/html');
      const { textContent } = doc.getElementsByTagName('body')[0];

      return (3 * 8) / (textContent || '   ').length;
    }
  },
  props: {
    innerHtml: Object
  }
});
</script>

<style>
.page-title h1 {
  user-select: none;
  overflow: hidden;
}
</style>
