<template>
  <div class="photos container h-75">
    <div class="row h-100">
      <div class="col col-lg-9 h-100 page-box box-shadow">
        <div class="row h-50 fade-in">
          <div
            v-for="(img, i) in [...allPhotos, ...allPhotoSets].sort(
              (a, b) => new Date(b.dateUploaded) - new Date(a.dateUploaded)
            )"
            :key="`${img.dateUploaded}-${i}`"
            class="col-xs-12 col-lg-4 h-100 mb-4"
          >
            <photo
              v-if="img.__typename === 'Photo'"
              :image="img"
              :baseImageUrl="baseImageUrl"
            />

            <photo-set v-else :photoSet="img" :baseImageUrl="baseImageUrl" />
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
import { defineComponent } from 'vue';

import Photo from '../components/Photo.vue';
import PhotoSet from '../components/PhotoSet.vue';

export default defineComponent({
  name: 'Photos',
  components: { Photo, PhotoSet },
  apollo: {
    allPhotos: gql`
      query {
        allPhotos: photos {
          file
          caption
          dateUploaded
        }
      }
    `,

    allPhotoSets: gql`
      query {
        allPhotoSets: photoSets {
          title
          files
          cover
          dateUploaded
        }
      }
    `
  },

  data() {
    return {
      allPhotos: [],
      allPhotoSets: [],
      baseImageUrl: process.env.VUE_APP_S3_BUCKET
    };
  }
});
</script>

<style>
.box-shadow {
  overflow-y: auto;
}
</style>
