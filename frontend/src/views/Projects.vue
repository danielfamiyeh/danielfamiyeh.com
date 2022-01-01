<template>
  <div class="projects-page container h-75">
    <div class="row h-100">
      <div class="col box-shadow col-lg-9 h-100">
        <div v-if="!$apollo.queries.allProjects.loading" class="row h-50">
          <div
            class="col col-lg-1 no-border d-none d-lg-flex align-items-center justify-content-center fade-in"
          >
            <button
              v-if="projectNo > 0"
              class="fas fa-chevron-left"
              @click="changeProject(-1)"
            />
          </div>

          <div class="col col-xs-12 col-lg-10 h-100 no-border fade-in">
            <div class="row d-flex align-items-center h-100">
              <div class="col no-border">
                <h1 class="project-name">
                  {{ allProjects[projectNo].name }}
                  <hr />
                </h1>
                <p>{{ allProjects[projectNo].description }}</p>
              </div>
            </div>
          </div>

          <div
            class="col col-lg-1 no-border h-100 d-none d-lg-flex align-items-center justify-content-center fade-in"
          >
            <button
              v-if="projectNo !== allProjects.length - 1"
              class="fas fa-chevron-right"
              @click="changeProject(1)"
            />
          </div>
        </div>

        <div
          v-if="!$apollo.queries.allProjects.loading"
          class="row h-50 d-none d-lg-flex fade-in"
        >
          <div class="col bottom-right col-lg-4 h-100">
            <unordered-list :items="allProjects[projectNo].features" />
          </div>

          <div class="col bottom-center bottom-center col-lg-4 h-100">
            <unordered-list
              :items="allProjects[projectNo].skills"
              itemClass="h5"
            />
          </div>

          <div class="col col-lg-4 p-3">
            <div
              class="div-with-bg-img h-100"
              :style="`background: url(${baseImageUrl}/project-screenshots/${lowerCaseName}/code_${lowerCaseName}_1.jpg)`"
            />
          </div>
        </div>

        <div
          v-else
          class="row h-100 d-flex flex-column align-items-center justify-content-center"
        >
          <spinner :size="2" />
          <p class="mt-2">Loading Projects</p>
        </div>
      </div>

      <sidetext
        innerHtml="S I D E <i class='persian-plum'>◦</i><br />P R O J E C T
        S"
      />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { defineComponent } from 'vue';

import Sidetext from '../components/Sidetext.vue';
import UnorderedList from '../components/UnorderedList.vue';

export default defineComponent({
  name: 'About',
  apollo: {
    allProjects: gql`
      query {
        allProjects: projects {
          id
          name
          description
          skills
          features
          socials {
            url
          }
        }
      }
    `
  },

  components: {
    sidetext: Sidetext,
    UnorderedList
  },

  methods: {
    changeProject(incr) {
      if (incr > 0 && this.projectNo < this.allProjects.length) {
        this.projectNo++;
      } else if (incr < 0 && this.projectNo > 0) {
        this.projectNo--;
      }
    }
  },

  computed: {
    lowerCaseName() {
      return (this.allProjects[this.projectNo].name || '').toLowerCase();
    }
  },

  data() {
    return {
      allProjects: [],
      projectNo: 0,
      baseImageUrl: process.env.VUE_APP_S3_BUCKET
    };
  }
});
</script>

<style scoped>
button {
  font-size: 1.5rem;
}

i {
  color: var(--persian-plum);
}

.inline-photographer {
  user-select: none;
}

.box-shadow {
  box-shadow: 10px 20px;
}

.div-with-bg-img {
  filter: grayscale(0.7) blur(0.05rem);
  border-radius: 1rem;
}

@media only screen and (min-width: 768px) {
  /* .col {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  } */

  .col .no-border {
    border: none;
  }
}
</style>
