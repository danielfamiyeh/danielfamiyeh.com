<template>
  <button
    ref="btn"
    :class="`my-btn ${className}`"
    :style="`cursor: ${cursorState}; color: ${nonHoverColor}; ${styleString};`"
    @mouseover="this.$refs.btn.style.color = hoverColor"
    @mouseout="this.$refs.btn.style.color = nonHoverColor"
    @mouseup="this.$refs.btn.style.color = nonHoverColor"
  >
    <span v-html="content" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    className: {
      type: String,
      default: ''
    },
    style: {
      type: Object,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    hoverColor() {
      return this.clickable ? 'var(--rose-taupe)' : 'var(--unclickable)';
    },

    nonHoverColor() {
      return this.clickable ? '#d10829' : 'var(--unclickable)';
    },

    cursorState() {
      return this.clickable ? 'pointer' : 'auto';
    },

    styleString() {
      return JSON.stringify(this.style)
        .slice(1, -1)
        .replace(/"/g, '')
        .replace(/,/g, '; ');
    }
  }
});
</script>

<style>
.my-btn {
  background: none;
  border: none;
}

.my-btn:hover {
  color: var(--rose-taupe);
}
</style>
