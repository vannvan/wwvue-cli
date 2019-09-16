import ComponentName from './src/ComponentName.vue';

ComponentName.install = function (Vue) {
  Vue.component(ComponentName.name, ComponentName);
};

export default ComponentName;
