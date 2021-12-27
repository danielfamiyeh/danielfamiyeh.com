<template>
  <div class="photos container h-75">
    <div class="row h-100">
      <div class="col col-lg-9 h-100 box-shadow">
        <div class="row h-50">
          <page-title :innerHtml="{ top: 'PHO', bottom: 'TOS' }" />
        </div>
      </div>

      <sidetext
        innerHtml="P H O T O <i class='persian-plum'>◦</i><br /> B L O G"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style>
.box-shadow {
  overflow-y: auto;
}
</style>
