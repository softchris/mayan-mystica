import Page from '../components/Page';
import Item from '../components/Item';
import Login from '../components/Login';
import Register from '../components/Register';

export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('Item', Item);
	Vue.component('Login', Login);
	Vue.component('Register', Register);
};
