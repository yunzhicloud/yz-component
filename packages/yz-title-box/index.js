import TitleBox from './src/title-box.vue';

/* istanbul ignore next */
TitleBox.install = function (Vue) {
    Vue.component(TitleBox.name, TitleBox);
};

export default TitleBox;
