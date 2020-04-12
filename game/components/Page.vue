<template>
	<div class="prompt" v-if="show">
		{{ instructions }}
		<router-link class="page-nav" :to="this.url">{{ action }}</router-link>
	</div>
</template>
<script>
const items = require('../utils/items.json');
import { hasItem, getUID, setUID, hasUID, setSessionTicket } from '../utils/helpers';
import axios from 'axios';
export default {
	created: function() {
		this.getInventory();
		var hasID = hasUID();
		//if there's no id in local storage
		if (!hasID) {
			setUID();
		}
		axios
			.post(`https://8EA26.playfabapi.com/Client/LoginWithCustomID`, {
				TitleId: '8EA26',
				CustomId: getUID(),
				CreateAccount: hasID
			})
			.then(response => {
				console.log(response);
				setSessionTicket(response.data.data.SessionTicket);
			})
			.catch(e => {
				console.log(e);
			});
	},
	data() {
		this.$root.$on('item_added', id => {
			if (this.condition == id) {
				this.show = true;
			}
		});

		this.$root.$on('showResult', id => {
			if (this.condition == id) {
				this.show = true;
			}
		});

		return {
			show: false
		};
	},
	methods: {
		getInventory() {
			if (this.condition == hasItem(this.condition) || this.condition == 'none') {
				this.show = true;
			}
		},
		gotoRoom: function() {
			console.log(`Navigating to  ${this.url}`);
			this.$router.push(`/rooms/${this.url}`);
		}
	},
	props: ['url', 'action', 'condition', 'instructions']
};
</script>
<style lang="stylus">
.prompt {
  padding-top: 10px;
  font-size: 28px;
}

.page-nav {
  font-weight: bold;
  padding-top: 10px;
  color: green;
  text-decoration: underline;
  display: block;
  cursor: pointer;
}
</style>
