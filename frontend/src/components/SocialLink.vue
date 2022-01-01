<template>
  <a
    :class="`social-link ${className} ${faClass}`"
    :href="to"
    target="_blank"
    rel="noreferrer noopener"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: true
    },

    className: {
      type: String,
      default: ''
    }
  },

  computed: {
    faClass() {
      const { type } = this;
      let className = '';
      switch (type) {
        case 'email':
          className = 'fas fa-envelope';
          break;

        case 'live':
          className = 'fas fa-link';
          break;

        default:
          className = `fab fa-${type}`;
          break;
      }

      return className;
    }
  }
});
</script>

<style>
.social-link {
  cursor: pointer;
  text-decoration: none !important;
  color: var(--persian-plum) !important;
}

.social-link:hover {
  color: var(--rose-taupe) !important;
}
</style>
