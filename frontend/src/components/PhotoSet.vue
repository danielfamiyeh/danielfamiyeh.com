<template>
  <div
    v-if="setLength"
    v-lazyload
    class="photoblog-photo-set div-with-bg-img h-100"
    :data-url="`${baseImageUrl}/${photoSet.files[photoSet.cover]}.jpg`"
  >
    <div
      class="multiple-container d-flex align-items-center justify-content-center w-100 h-100"
      @click="onToggleModal(true)"
    >
      <i class="multiple fas fa-images fa-2x" />
    </div>

    <photo-modal
      :show="showModal"
      :photoSet="photoSet"
      :baseImageUrl="baseImageUrl"
      @closeModal="onToggleModal(false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PhotoModal from '../components/PhotoModal.vue';

export default defineComponent({
  props: {
    photoSet: Object,
    baseImageUrl: String
  },
  components: { PhotoModal },
  setup() {},
  computed: {
    setLength() {
      const { photoSet = {} } = this.$props;
      const set = photoSet.files || [];
      return set.length;
    }
  },
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
.photoblog-photo-set:hover {
  cursor: pointer;
}

.photoblog-photo-set .multiple-container {
  opacity: 1;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
}

.photoblog-photo-set:hover .multiple {
  text-decoration: underline;
  text-underline-position: under;
}
</style>
