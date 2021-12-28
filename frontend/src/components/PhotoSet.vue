<template>
  <div
    v-if="setLength"
    class="photoblog-photo-set div-with-bg-img h-100"
    :style="`background-image: url(${baseImageUrl}/${photoSet.files[0]}.jpg)`"
  >
    <div
      class="count-container d-flex align-items-center justify-content-center w-100 h-100"
    >
      <span class="h3 count">
        {{ setLength }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    photoSet: Object,
    baseImageUrl: String
  },
  setup() {},
  computed: {
    setLength() {
      const { photoSet } = this.$props;
      const set = photoSet.files || [];
      return set.length;
    }
  }
});
</script>

<style>
.photoblog-photo-set:hover {
  cursor: pointer;
}

.photoblog-photo-set .count-container {
  opacity: 1;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
}

.photoblog-photo-set:hover .count {
  text-decoration: underline;
  text-underline-position: under;
}
</style>
