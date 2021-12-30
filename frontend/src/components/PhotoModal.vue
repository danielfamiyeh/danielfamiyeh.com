<template>
  <div
    v-show="show"
    @contextmenu="() => false"
    class="p-modal row position-fixed w-100 h-100"
  >
    <div class="col-2 h-100 d-flex align-items-center justify-content-center">
      <button
        v-if="photoIndex > 0"
        class="fas fa-chevron-left"
        @click="changeModalPhoto(-1)"
      />
    </div>
    <div
      class="col-8 h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div
        class="h-75 d-flex flex-column align-items-center justify-content-center"
      >
        <button class="close-btn fas fa-times" @click="onCloseModal()" />

        <img
          class="h-75"
          :src="`${baseImageUrl}/${photoSet.files[photoIndex]}.jpg`"
        />

        <b class="h4" style="color: white">{{ photoSet.title }} </b>
      </div>
    </div>
    <div class="col-2 h-100 d-flex align-items-center justify-content-center">
      <button
        v-if="photoIndex < setLength - 1"
        class="fas fa-chevron-right"
        @click="changeModalPhoto(1)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    photoSet: Object,

    baseImageUrl: String,

    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setLength() {
      const { photoSet = {} } = this.$props;
      const set = photoSet.files || [];
      return set.length;
    }
  },
  data() {
    return { photoIndex: 0 };
  },
  methods: {
    changeModalPhoto(incr: number) {
      if (incr > 0 && this.photoIndex < this.setLength) {
        this.photoIndex++;
      } else if (incr < 0 && this.photoIndex > 0) {
        this.photoIndex--;
      }
    },

    onCloseModal() {
      this.$emit('closeModal', true);
      this.photoIndex = 0;
    }
  }
});
</script>

<style>
.p-modal {
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  cursor: auto;
  animation: fadeInAnim 0.35s ease-in;
}

.p-modal button {
  font-size: 2rem;
}
</style>
