<template>
  <div class="home-page container h-75">
    <div class="row h-100">
      <div class="col col-lg-9 h-100">
        <div class="row h-50">
          <page-title :innerHtml="{ top: 'DAN', bottom: 'FAM' }" />

          <div class="col col-lg-8 h-100">
            <div class="row d-flex align-items-center h-100">
              <div class="col fade-in no-border">
                <h1 class="soft-dev">
                  SOFTWARE
                  <small class="persian-plum d-none d-lg-inline-block">◦</small>
                  DEVELOPER
                  <hr />
                </h1>
                <h1 class="d-xs-block d-lg-none mb-5">PHOTOGRAPHER</h1>
                <div class="d-flex align-items-center justify-content-evenly">
                  <span v-for="type in Object.keys(contactInfo)" :key="type">
                    <social-link
                      class="fa-2x"
                      :type="type"
                      :to="contactInfo[type]"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row h-50 d-none d-lg-flex">
          <div
            class="sample-photo-container p-2 col col-lg-4 h-100"
            v-for="url in samplePhotos"
            :key="url"
          >
            <div
              class="fade-in div-with-bg-img h-100"
              :style="`background-image: url(${url})`"
            />
          </div>
        </div>
      </div>

      <sidetext
        :innerHtml="/* pretter-disable */ `P H O T O <i class='persian-plum'>◦</i><br />G R A P H E R`"
        font-size="4.5rem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// @ts-ignore
import samplePhotos from '../assets/samplePhotos';
import SocialLink from '../components/SocialLink.vue';

export default defineComponent({
  components: { SocialLink },
  name: 'Home',
  setup() {
    const { VUE_APP_CONTACT_INFO: contactInfo = '{}' } = process.env;
    return { contactInfo: JSON.parse(contactInfo) };
  },
  data() {
    return { samplePhotos };
  }
});
</script>

<style>
.home-page .dan-fam h1 {
  font-size: 8rem;
  user-select: none;
}

.home-page .soft-dev {
  user-select: none;
}

.home-page .inline-photographer {
  user-select: none;
}

.home-page .quote {
  user-select: none;
}

.home-page .div-with-bg-img {
  border-radius: 0.3rem;
}
</style>
