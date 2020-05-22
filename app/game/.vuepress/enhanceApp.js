import Page from '../AzureMayaMystery/components/Page';
import Item from '../AzureMayaMystery/components/Item';
import Login from '../AzureMayaMystery/components/Login';
import Register from '../AzureMayaMystery/components/Register';
import Buttons from '../AzureMayaMystery/components/Buttons';
import Puzzle from '../AzureMayaMystery/components/Puzzle';
import Challenge1 from '../AzureMayaMystery/components/Challenge1';
import VueI18n from 'vue-i18n';

export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('Login', Login);
	Vue.component('Register', Register);
	Vue.component('Buttons', Buttons);
	Vue.component('Puzzle', Puzzle);
	Vue.component('Challenge1', Challenge1);
	Vue.use(VueI18n);
};
