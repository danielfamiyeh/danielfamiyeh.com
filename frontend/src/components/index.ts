import Vue from 'vue';

import PageTitle from './PageTitle.vue';
import SideText from './Sidetext.vue';
import UnorderedList from './UnorderedList.vue';
import Spinner from './Spinner.vue';
import Photo from './Photo.vue';
import Button from './Button.vue';

const comps = [PageTitle, SideText, UnorderedList, Spinner, Photo, Button];
const names = [
  'page-title',
  'sidetext',
  'unordered-list',
  'spinner',
  'photo',
  'btn'
];

export const registerComponents = (app: Vue.App) => {
  comps.forEach((comp, i) => {
    app.component(names[i], comp);
  });
};
