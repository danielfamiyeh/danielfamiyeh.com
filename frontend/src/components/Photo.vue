<template>
  <div
    class="div-with-bg-img photoblog-img h-100"
    :style="`background-image: url(${baseImageUrl}/${image.file}.jpg);`"
  >
    <caption
      class="h-100 w-100 d-flex align-items-center justify-content-center"
    >
      {{
        image.caption
      }}
    </caption>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Photo',
  props: {
    image: Object,
    baseImageUrl: String
  }
});
</script>

<style>
.photoblog-img:hover {
  cursor: pointer;
}

.photoblog-img caption {
  opacity: 0;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
}

.photoblog-img:hover caption {
  opacity: 1;
}
</style>
