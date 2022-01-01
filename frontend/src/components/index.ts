import Vue from 'vue';

import SocialLink from './SocialLink.vue';
import PageTitle from './PageTitle.vue';
import SideText from './Sidetext.vue';
import Spinner from './Spinner.vue';

import UnorderedList from './dom/UnorderedList.vue';
import Button from './dom/Button.vue';

import Photo from './photo/Photo.vue';

const comps = [
  PageTitle,
  SideText,
  UnorderedList,
  Spinner,
  Photo,
  Button,
  SocialLink
];
const names = [
  'page-title',
  'sidetext',
  'unordered-list',
  'spinner',
  'photo',
  'btn',
  'social-link'
];

export const registerComponents = (app: Vue.App) => {
  comps.forEach((comp, i) => {
    app.component(names[i], comp);
  });
};
