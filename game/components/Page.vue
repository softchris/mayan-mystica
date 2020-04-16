<template>
	<div class="prompt" v-if="show">
		{{ instructions }}
		<!--<div class="page-nav" @click="goToRoom(url)">{{ action }}</div>-->
		<router-link :to="link || './'">{{ action }}</router-link>
	</div>
</template>
<script>
const items = require('../utils/items.json');
import { hasItem, getUID, setUID, hasUID, setSessionTicket } from '../utils/helpers';
import axios from 'axios';
export default {
	created() {
		console.log(this.url);
		this.getInventory();
		if (!hasUID()) {
			setUID();
		}
		axios
			.post(`https://8EA26.playfabapi.com/Client/LoginWithCustomID`, {
				TitleId: '8EA26',
				CustomId: getUID(),
				CreateAccount: hasUID(),
			})
			.then((response) => {
				setSessionTicket(response.data.data.SessionTicket);
			})
			.catch((e) => {
				console.log(e);
			});
	},
	data() {
		this.$root.$on('item_added', (id) => {
			if (this.condition == id) {
				this.show = true;
			}
		});

		this.$root.$on('showResult', (id) => {
			if (this.condition == id) {
				this.show = true;
			}
		});

		return {
			show: false,
			link: this.url,
		};
	},
	methods: {
		getInventory() {
			if (this.condition == hasItem(this.condition) || this.condition == 'none') {
				this.show = true;
			}
		},
		goToRoom(url) {
			console.log(url);
			this.$router.replace({ path: url });
		},
	},
	props: ['url', 'action', 'condition', 'instructions'],
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
