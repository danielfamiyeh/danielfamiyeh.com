<template>
  <div
    v-show="show"
    @contextmenu="() => false"
    class="p-modal row position-fixed w-100 h-100"
  >
    <div class="col-2 h-100 d-flex align-items-center justify-content-center">
      <btn
        v-if="setLength > 1"
        :clickable="photoIndex > 0"
        class="fas fa-chevron-left"
        style="font-size: 2rem; z-index: 2; position: relative"
        @click="changeModalPhoto(-1)"
      />
    </div>
    <div
      class="col-8 h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div
        class="h-75 d-flex flex-column align-items-center justify-content-center"
      >
        <btn
          class="close-btn fas fa-times"
          style="font-size: 2rem; z-index: 2; position: relative"
          @click="onCloseModal()"
        />

        <img
          class="h-75"
          style="border-radius: 0.3rem; position: relative"
          :src="`${baseImageUrl}/${photoSet.files[photoIndex]}`"
        />

        <b class="h4" style="color: white">{{ photoSet.title }} </b>
      </div>
    </div>
    <div class="col-2 h-100 d-flex align-items-center justify-content-center">
      <btn
        v-if="setLength > 1"
        :clickable="photoIndex < setLength - 1"
        style="font-size: 2rem; z-index: 2; position: relative"
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

  methods: {
    changeModalPhoto(incr: number) {
      if (incr > 0 && this.photoIndex < this.setLength - 1) {
        this.photoIndex++;
      } else if (incr < 0 && this.photoIndex > 0) {
        this.photoIndex--;
      }
    },

    onControlModal(e: { code: string }) {
      const { code } = e;

      if (code === 'ArrowLeft' && this.photoIndex > 0) this.photoIndex--;
      if (code === 'ArrowRight' && this.photoIndex < this.setLength - 1)
        this.photoIndex++;
    },

    onCloseModal() {
      this.$emit('closeModal', true);
      this.photoIndex = 0;
    }
  },

  mounted() {
    document.body.addEventListener('keydown', this.onControlModal);
  },

  data() {
    return { photoIndex: 0 };
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
</style>
