<template>
  <div class="photos container h-75">
    <div class="row h-100">
      <div class="col col-lg-9 h-100 page-box box-shadow">
        <div class="row h-50">
          <div
            v-for="img in [...allPhotos, allPhotoSets].sort(
              (a, b) => new Date(b.dateUploaded) - new Date(a.dateUploaded)
            )"
            :key="img.dateUploaded"
            class="col-xs-12 col-lg-4 h-100"
          >
            <photo
              v-if="img.__typename === 'Photo'"
              :image="img"
              :baseImgUrl="baseImgUrl"
            />

            <div
              v-else
              class="h-100 d-flex align-items-center justify-content-center"
            />
          </div>
        </div>
      </div>

      <sidetext
        innerHtml="P H O T O <i class='persian-plum'>◦</i><br /> B L O G"
      />
    </div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import { defineComponent, onMounted } from 'vue';

import Photo from '../components/Photo.vue';

export default defineComponent({
  name: 'Photos',
  components: { Photo },
  apollo: {
    allPhotos: gql`
      query {
        allPhotos: photos {
          file
          caption
          dateUploaded
        }
      }
    `
  },

  data() {
    return {
      allPhotos: [],
      allPhotoSets: [],
      baseImgUrl: process.env.VUE_APP_S3_BUCKET
    };
  },

  setup() {}
});
</script>

<style>
.box-shadow {
  overflow-y: auto;
}
</style>
