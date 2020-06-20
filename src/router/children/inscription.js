/* eslint-disable */
const layoutPath = '@/component/pages/inscription/';
export default [
  {
    path: 'step-one',
    component: () => import('../../component/pages/inscription/StepOne.vue'),
    nextPage: 'step-two',
  },
];

/* eslint-enable */
