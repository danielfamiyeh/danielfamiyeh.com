<template>
  <ul class="unordered-list h-100 d-flex flex-column justify-content-evenly">
    <li v-for="item in items" :key="item" :class="itemClass">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: Array,
    itemClass: {
      type: String,
      default: 'p'
    }
  }
});
</script>

<style>
.unordered-list li {
  list-style-type: '◦';
  text-align: left;
  padding-left: 1rem;
}

.unordered-list li::marker {
  color: var(--persian-plum);
  font-size: 1rem;
}

.unordered-list li.p {
  font-size: 1rem;
}
</style>
