import ToolBar from './src/toolBar.vue';

/* istanbul ignore next */
ToolBar.install = function (Vue) {
    Vue.component(ToolBar.name, ToolBar);
};

export default ToolBar;
