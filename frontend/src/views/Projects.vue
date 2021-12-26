<template>
  <div>
    {{ allProjects }}
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { defineComponent } from 'vue';

export default defineComponent({
  apollo: {
    allProjects: gql`
      query {
        allProjects: projects {
          id
          name
          description
          skills
          socials {
            url
          }
        }
      }
    `
  },

  data() {
    return { allProjects: [] };
  }
});
</script>

<style scoped></style>
