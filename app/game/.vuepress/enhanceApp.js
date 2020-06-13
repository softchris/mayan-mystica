import Page from './components/Page';
import Item from './components/Item';
import Login from './components/Login';
import Register from './components/Register';
import Buttons from './components/Buttons';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Challenge1 from './components/Challenge1';
//import VueI18n from 'vue-i18n';

export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('Login', Login);
	Vue.component('Register', Register);
	Vue.component('Buttons', Buttons);
	Vue.component('Puzzle1', Puzzle1);
	Vue.component('Puzzle2', Puzzle2);
	Vue.component('Puzzle3', Puzzle3);
	Vue.component('Challenge1', Challenge1);
	//Vue.use(VueI18n);
};
