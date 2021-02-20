import Card from '../packages/yz-card/index';
import Tabs from '../packages/yz-tabs/index';
import TabPane from '../packages/yz-tab-pane/index';
import Switch from '../packages/yz-switch/index';
import Tag from '../packages/yz-tag/index';
import Spin from '../packages/yz-spin/index';
import TitleBox from '../packages/yz-title-box/index';
import Table from '../packages/yz-table/index'
import DropDown from '../packages/yz-dropDown/index'
import Search from '../packages/yz-search/index'
import Toolbar from '../packages/yz-tool-bar/index'
import {
    DropdownMenu,
    DropdownItem
} from 'view-design'
const components = [
    Card,
    Tabs,
    TabPane,
    Switch,
    Tag,
    Spin,
    TitleBox,
    Table,
    DropDown,
    Search,
    Toolbar
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    Vue.component('YzDropdownMenu', DropdownMenu)
    Vue.component('YzDropdownItem', DropdownItem)
}

export default {
    version: '1.0.0',
    install,
    Card,
    Tabs,
    TabPane,
    Switch,
    Tag,
    Spin,
    TitleBox,
    Table,
    DropdownMenu,
    DropdownItem,
    Search,
    Toolbar
}
