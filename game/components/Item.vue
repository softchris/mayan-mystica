<template>
	<div @click="pickUp(item.id)">
		<p v-if="show">
			You see a
			<span class="item">{{ item.name }}</span>
		</p>
	</div>
</template>
<script>
const items = require('../utils/items.json');
import { addItem, hasItem, getUID, getSessionTicket } from '../utils/helpers';

export default {
	computed: {
		item() {
			let item = items.find((row) => row.id == this.id);
			item = item || { name: 'not set' };
			return item;
		},
	},
	data() {
		const item = items.find((row) => row.id == this.id);

		return {
			show: !item || !hasItem(item.id),
		};
	},
	methods: {
		pickUp(id) {
			//playfab
			var data = {
				Data: { item: 'turtle_glyph' },
			};
			PlayFabClientSDK.UpdateUserData(data, this.callback);
			let addOk = confirm('Take a picture?');
			if (addOk) {
				addItem(id);
				this.$root.$emit('item_added', id);
				this.show = false;
			}
		},
		callback(e) {
			console.log(e);
		},
	},
	props: ['id'],
};
</script>
<style scoped>
.item {
	color: orange;
	font-weight: bold;
}
</style>
