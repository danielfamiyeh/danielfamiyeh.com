<template>
  <div
    v-if="setLength"
    class="photoblog-photo-set div-with-bg-img h-100"
    :style="`background-image: url(${baseImageUrl}/${
      photoSet.files[photoSet.cover]
    }.jpg)`"
  >
    <div
      class="count-container d-flex align-items-center justify-content-center w-100 h-100"
      @click="onToggleModal(true)"
    >
      <span class="h3 count">
        {{ setLength }}
      </span>
    </div>

    <div v-show="openModal" class="ps-modal row position-fixed w-100 h-100">
      <div class="col-2 h-100 d-flex align-items-center justify-content-center">
        <button
          v-if="modalPhotoIndex > 0"
          class="fas fa-chevron-left"
          @click="changeModalPhoto(-1)"
        />
      </div>
      <div
        class="col-8 h-100 d-flex flex-column align-items-center justify-content-center"
      >
        <button class="close-btn fas fa-times" @click="onToggleModal(false)" />
        <div class="h-75 d-flex align-items-center justify-content-center">
          <img
            class="w-75"
            :src="`${baseImageUrl}/${photoSet.files[modalPhotoIndex]}.jpg`"
          />
        </div>
      </div>
      <div class="col-2 h-100 d-flex align-items-center justify-content-center">
        <button
          v-if="modalPhotoIndex < setLength - 1"
          class="fas fa-chevron-right"
          @click="changeModalPhoto(1)"
        />
      </div>
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
      const { photoSet = {} } = this.$props;
      const set = photoSet.files || [];
      return set.length;
    }
  },
  data() {
    return {
      openModal: false,
      modalPhotoIndex: 0
    };
  },
  methods: {
    onToggleModal(state: boolean) {
      this.$emit('toggleModal', state);
      this.$data.openModal = state;
    },

    changeModalPhoto(incr: number) {
      if (incr > 0 && this.modalPhotoIndex < this.setLength) {
        this.modalPhotoIndex++;
      } else if (incr < 0 && this.modalPhotoIndex > 0) {
        this.modalPhotoIndex--;
      }
    }
  }
});
</script>

<style>
.photoblog-photo-set button {
  font-size: 2rem;
}

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

.photoblog-photo-set .ps-modal {
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  cursor: auto;
}
</style>
