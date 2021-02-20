import DropDown from './src/dropDown';
import {
  DropdownMenu,
  DropdownItem
} from 'view-design'
/* istanbul ignore next */
DropDown.install = function(Vue) {
  Vue.component(DropDown.name, DropDown);
  Vue.component('YzDropdownMenu',DropdownMenu)
  Vue.component('YzDropdownItem',DropdownItem)
};

export default DropDown;
