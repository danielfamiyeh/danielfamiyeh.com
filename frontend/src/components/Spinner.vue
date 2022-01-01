<template>
  <div
    class="spinner"
    :style="`width: ${size}rem; height: ${size}rem; border: ${borderSize}rem solid #333; border-top: ${borderSize}rem solid var(--persian-plum);`"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: {
      type: Number,
      required: true
    }
  },
  computed: {
    borderSize() {
      return this.size / 10;
    }
  }
});
</script>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  border: 0.2rem solid #333;
  border-top: 0.2rem solid var(--persian-plum);
  border-radius: 50%;
  animation: spin 2s linear infinite;
}
</style>
