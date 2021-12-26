<template>
  <div class="home container h-75">
    <div class="row h-100">
      <div class="col box-shadow col-lg-9 h-100">
        <div class="row h-50">
          <div class="dan-fam h-100 col col-lg-4">
            <div class="row h-50 stroke-plum">
              <h1>DAN</h1>
            </div>

            <div class="row h-50">
              <h1>FAM</h1>
            </div>
          </div>

          <div class="col col-lg-8 h-100">
            <div class="row d-flex align-items-center h-100">
              <h1 class="soft-dev">
                SOFTWARE
                <small class="persian-plum d-none d-lg-inline-block">◦</small>
                DEVELOPER
                <hr />
                <span class="d-xs-block d-lg-none">PHOTOGRAPHER</span>
              </h1>
            </div>
          </div>
        </div>

        <div class="row h-50 d-none d-lg-flex">
          <div class="bottom-left-img col col-lg-4 h-100" />

          <div
            class="col bottom-right-img quote col-lg-4 h-100 d-flex flex-column align-items-center justify-content-center"
          />
          <div class="col bottom-center-img col-lg-4 h-100" />
        </div>
      </div>

      <div class="col-3 d-none d-lg-block vh-75">
        <h1 class="photographer">
          P H O T O <i class="persian-plum">◦</i><br />G R A P H E R
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
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

.photographer {
  margin-top: 51vh;
  margin-left: 5vw;
  transform: rotate(-90deg);
  white-space: nowrap;
  font-size: 6em;
  user-select: none;
}

.box-shadow {
  box-shadow: 10px 20px;
}

@media only screen and (min-width: 768px) {
  .col {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  }
}

.bottom-left-img {
  background-image: url('../assets/photo/nomi_cropped.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.bottom-center-img {
  background-image: url('../assets/photo/maisiebw1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.bottom-right-img {
  /* background: linear-gradient(
      0deg,
      rgba(17, 17, 17, 0.7),
      rgba(17, 17, 17, 0.6)
    ),
    url('../assets/photo/bk.jpg'); */

  background-image: url('../assets/photo/micro.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
