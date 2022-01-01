<template>
  <ul
    :class="`unordered-list h-100 d-flex justify-content-evenly ${listClass}`"
    :style="listStyle"
  >
    <li v-for="item in items" :key="item" :class="itemClass" :style="itemStyle">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array,
      required: true
    },
    listStyle: {
      type: String,
      default: ''
    },
    listClass: {
      type: String,
      default: ''
    },
    itemStyle: {
      type: String,
      default: ''
    },
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
