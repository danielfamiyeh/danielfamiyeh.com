<template>
  <div class="home-page container h-75">
    <div class="row h-100">
      <div class="col box-shadow col-lg-9 h-100">
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
                    <a
                      :class="
                        type === 'email' ? 'fas fa-envelope' : `fab fa-${type}`
                      "
                      :href="contactInfo[type]"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="contact-link fa-2x"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row h-50 d-none d-lg-flex">
          <div
            v-for="url in samplePhotos"
            class="fade-in div-with-bg-img col col-lg-4 h-100"
            :key="url"
            :style="`background-image: url(${url})`"
          />
        </div>
      </div>

      <sidetext
        innerHtml="P H O T O <i class='persian-plum'>◦</i><br />G R A P H E
        R"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import samplePhotos from '../assets/samplePhotos';

export default defineComponent({
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
  font-size: 8em;
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

@media only screen and (min-width: 768px) {
  .home-page .col .no-border {
    border: none;
  }
}

.home-page .contact-link {
  cursor: pointer;
  text-decoration: none !important;
  color: var(--persian-plum) !important;
}

.home-page .contact-link:hover {
  color: var(--rose-taupe) !important;
}
</style>
