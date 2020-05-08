<template>
	<div v-if="item.filename != ''" @click="takePic(item)">
		<p v-if="showInstructions">
			{{ item.instructions }}
			<span class="item">{{ item.name }}</span>
		</p>
	</div>
	<div v-else>
		<p @click="emitResult(item)">
			{{ item.instructions }}
			<span class="item" @click="showResult = !showResult">{{ item.name }}</span>
		</p>
		<p v-if="showResult">{{ item.result }}</p>
	</div>
</template>
<script>
const items = require('../utils/items.json');
import { addItem, hasItem, getUID, getSessionTicket } from '../utils/helpers';
import axios from 'axios';

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
			showInstructions: !item || item.initialHide,
			showResult: false,
		};
	},
	methods: {
		takePic(item) {
			//generate a json object to send to playfab
			var jsonData = {};
			var columnName = item.id;
			jsonData[columnName] = item.gameItem;

			axios
				.post('/api/login', {
					Data: jsonData,
				})
				.then((response) => {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});

			let addOk = confirm('Take a picture?');
			if (addOk) {
				addItem(item.id);
				this.$root.$emit('item_added', item.id);
				//you got the picture, so hide the prompt
				this.showInstructions = false;
			}
		},
		emitResult(item) {
			this.$root.$emit('showResult', item.id);
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
	font-weight: bold;
	text-decoration: underline;
	color: #008df2;
}
</style>
