import Icon from './src/Icon.vue';

Icon.install = function(Vue) {
    Vue.component(Icon.name, Icon);
};

export default Icon;