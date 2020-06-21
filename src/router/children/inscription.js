/* eslint-disable */
export default [
  {
    path: 'step-one',
    component: () => import('../../component/pages/inscription/StepOne.vue'),
    meta: {
      nextPath: 'step-two',
      previousPath: '/',
    }
  },
  {
    path: 'step-two',
    component: () => import('../../component/pages/inscription/StepTwo.vue'),
    meta: {
      nextPath: 'inscription/step-tree',
      previousPath: 'step-one',
    }
  },
];

/* eslint-enable */
