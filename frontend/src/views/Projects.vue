<template>
  <div class="projects-page container h-75">
    <div class="row h-100 scroll">
      <div ref="pageBox" class="col col-lg-9 h-100 page-box pb-5">
        <div v-if="!$apollo.queries.allProjects.loading" class="row h-50">
          <div
            class="col col-lg-1 no-border d-none d-lg-flex align-items-center justify-content-center fade-in"
          >
            <btn
              class="fas fa-chevron-left"
              :clickable="projectNo > 0"
              @click="projectNo > 0 && changeProject(-1)"
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
            <btn
              class="fas fa-chevron-right"
              :clickable="projectNo !== allProjects.length - 1"
              @click="projectNo < allProjects.length - 1 && changeProject(1)"
            />
          </div>
        </div>

        <div
          class="row mb-5 skills-mobile-view d-flex d-lg-none justify-content-center fade-in"
        >
          <h3 class="h4 mb-3">Skills</h3>
          <unordered-list
            :items="allProjects[projectNo].skills"
            itemStyle="list-style-type: none;"
          />
        </div>

        <div class="row features-mobile-view d-flex d-lg-none fade-in">
          <h3 class="h4 mb-3">Features</h3>
          <unordered-list
            :items="allProjects[projectNo].features"
            itemClass="h6"
            listClass="flex-column p-5 pt-1"
          />
        </div>

        <div
          class="row mt-5 controls-mobile-view d-flex d-lg-none justify-content-evenly fade-in"
        >
          <div v-if="projectNo > 0" class="col">
            <btn @click="changeProject(-1)" content="Prev." />
          </div>
          <div v-if="projectNo !== allProjects.length - 1" class="col">
            <btn @click="changeProject(1)" content="Next" />
          </div>
        </div>

        <div
          v-if="!$apollo.queries.allProjects.loading"
          class="row h-50 d-none d-lg-flex fade-in"
        >
          <div class="col bottom-right col-lg-4 h-100">
            <unordered-list
              :items="allProjects[projectNo].features"
              listClass="flex-column"
            />
          </div>

          <div class="col bottom-center bottom-center col-lg-4 h-100">
            <unordered-list
              :items="allProjects[projectNo].skills"
              itemClass="h5"
              listClass="flex-column"
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
      // Scroll to top of row on mobile view
      this.$refs.pageBox.scrollTo(0, 0);

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

<style>
.projects-page button {
  font-size: 1.5rem;
}

.projects-page i {
  color: var(--persian-plum);
}

.projects-page .inline-photographer {
  user-select: none;
}

.projects-page .box-shadow {
  box-shadow: 10px 20px;
}

.projects-page .div-with-bg-img {
  filter: grayscale(0.7) blur(0.05rem);
  border-radius: 0.5rem;
}

.projects-page .mobile-view {
  overflow-y: auto;
}

.projects-page .page-box {
  overflow-y: auto;
}
</style>
