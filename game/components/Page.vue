<template>
	<router-link class="page-nav" :to="this.url">{{ name }}</router-link>
</template>
<script>
import { hasItem, getUID, setUID, hasUID } from '../utils/helpers';
export default {
	created: function() {
		// when loaded
		//todo, this should only run once!
		/*var loginRequest = {
			TitleId: '8EA26',
			CustomId: this.createUUID(),
			CreateAccount: true,
		};
    PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);*/
		var hasID = hasUID();
		if (!hasID) {
			setUID();
			var loginRequest = {
				TitleId: '8EA26',
				CustomId: getUID(),
				CreateAccount: true,
			};
			PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
		}
	},
	data() {
		var vm = this;
		this.$root.$on('item_added', (id) => {
			if (vm.condition == id) {
				vm.name = hasItem(vm.condition) ? vm.title : '';
			}
		});

		return {
			name: hasItem(this.condition) ? this.title : '',
		};
	},
	methods: {
		LoginCallback() {},
		gotoRoom: function() {
			console.log(`Navigating to  ${this.url}`);
			this.$router.push(`/rooms/${this.url}.html`);
		},
	},
	props: ['url', 'title', 'condition'],
};
</script>
<style lang="stylus">
.page-nav {
  padding-top: 10px;
  font-size: 28px;
  font-weight: bold;
  color: red;
  text-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
