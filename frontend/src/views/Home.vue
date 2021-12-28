<template>
  <div class="home container h-75">
    <div class="row h-100">
      <div class="col box-shadow col-lg-9 h-100">
        <div class="row h-50">
          <page-title :innerHtml="{ top: 'DAN', bottom: 'FAM' }" />

          <div class="col col-lg-8 h-100">
            <div class="row d-flex align-items-center h-100">
              <div class="col no-border">
                <h1 class="soft-dev">
                  SOFTWARE
                  <small class="persian-plum d-none d-lg-inline-block">◦</small>
                  DEVELOPER
                  <hr />
                </h1>
                <h1 class="d-xs-block d-lg-none">PHOTOGRAPHER</h1>
                <p>Based in London</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row h-50 d-none d-lg-flex">
          <!-- TODO: Make dynamic -->
          <div class="bottom-left-img div-with-bg-img col col-lg-4 h-100" />

          <div
            class="col bottom-right-img div-with-bg-img quote col-lg-4 h-100 d-flex flex-column align-items-center justify-content-center"
          />
          <div class="col bottom-center-img div-with-bg-img col-lg-4 h-100" />
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

export default defineComponent({
  name: 'Home',
  data() {}
});
</script>

<style scoped>
.dan-fam h1 {
  font-size: 8em;
  user-select: none;
}

.soft-dev {
  user-select: none;
}

.inline-photographer {
  user-select: none;
}

.quote {
  user-select: none;
}

@media only screen and (min-width: 768px) {
  /* .col {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  } */

  .col .no-border {
    border: none;
  }
}

.bottom-left-img {
  background-image: url('../assets/photo/nomi_cropped.jpg');
}

.bottom-center-img {
  background-image: url('../assets/photo/maisiebw1.jpg');
}

.bottom-right-img {
  background-image: url('../assets/photo/micro.jpg');
}
</style>
