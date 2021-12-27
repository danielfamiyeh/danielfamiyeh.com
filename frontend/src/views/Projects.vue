<template>
  <div class="projects-page container h-75">
    <div v-if="allProjects.length" class="row h-100">
      <div class="col box-shadow col-lg-9 h-100">
        <div class="row h-50">
          <page-title
            :innerHtml="{ top: 'PRO', bottom: `00${projectNo + 1}` }"
          />
          <div
            class="col col-lg-1 no-border d-none d-lg-flex align-items-center justify-content-center"
          >
            <button
              v-if="projectNo > 0"
              class="fas fa-chevron-left"
              @click="changeProject(-1)"
            ></button>
          </div>

          <div class="col col-xs-12 col-lg-6 h-100 no-border">
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
            class="col col-lg-1 no-border h-100 d-none d-lg-flex align-items-center justify-content-center"
          >
            <button
              v-if="projectNo !== allProjects.length - 1"
              class="fas fa-chevron-right"
              @click="changeProject(1)"
            />
          </div>
        </div>

        <div class="row h-50 d-none d-lg-flex">
          <div class="col bottom-center bottom-center col-lg-4 h-100">
            <unordered-list
              :items="allProjects[projectNo].skills"
              :itemClass="h5"
            />
          </div>

          <div class="col bottom-center col-lg-4 h"></div>

          <div class="col bottom-right col-lg-4 h-100">
            <unordered-list :items="allProjects[projectNo].features" />
          </div>
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

  data() {
    return { allProjects: [], projectNo: 0 };
  }
});
</script>

<style scoped>
button {
  color: var(--persian-plum);
  font-size: 1.5rem;
  background: none;
  border: none;
}

button:hover {
  color: var(--rose-taupe);
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

@media only screen and (min-width: 768px) {
  /* .col {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  } */

  .col .no-border {
    border: none;
  }
}
</style>
