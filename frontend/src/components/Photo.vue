<template>
  <div
    class="div-with-bg-img photoblog-img h-100"
    v-lazyload
    :data-url="`${baseImageUrl}/${image.file}.jpg`"
  >
    <caption
      class="h-100 w-100 d-flex align-items-center justify-content-center"
      @click="onToggleModal(true)"
    >
      {{
        image.caption
      }}
    </caption>

    <photo-modal
      :show="showModal"
      :photoSet="{ files: [image.file], title: image.caption }"
      :baseImageUrl="baseImageUrl"
      @closeModal="onToggleModal(false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PhotoModal from '../components/PhotoModal.vue';

export default defineComponent({
  name: 'Photo',
  props: {
    image: Object,
    baseImageUrl: String
  },
  components: { PhotoModal },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    onToggleModal(state: boolean) {
      this.$data.showModal = state;
    }
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
