import Vue from 'vue';

import LazyLoad from './lazyload';

const directive = (name: string, dir: object) => ({ name, dir });
const directives = [directive('lazyload', LazyLoad)];

export const registerDirectives = (app: Vue.App) => {
  directives.forEach(({ name, dir }) => {
    app.directive(name, dir);
  });
};
