/* eslint-disable */
const layoutPath = '@/component/pages/inscription/';
export default [
  {
    // `UserProfile` va être rendu à l'intérieur du `<router-view>` de `User`
    // quand `/utilisateur/:id/profil` concorde
    path: '/step-one',
    component: () => import(layoutPath + 'StepOne.vue'),
    nextPage: 'step-two',
  },
];

/* eslint-enable */
