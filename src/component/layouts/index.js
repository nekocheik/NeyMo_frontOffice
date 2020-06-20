/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context('.', false, /L[a-zA-z]+\.vue$/);
const modules = {};

requireModule.keys().forEach((filename) => {
  // create the module name from fileName
  // remove the store.js extension and capitalize
  const moduleName = filename
    .replace(/(\.\/|\.vue)/g, '');
  modules[moduleName] = requireModule(filename).default || requireModule(filename);
});

// import a-inputText from './a-inputText.vue';
// import a-button from './a-button.vue';

// export { a-inputText, a-button };

export default modules;
