<template>
	<div v-if="item.filename != ''" @click="takePic(item)">
		<p v-if="showInstructions">
			{{ getLocalizedInstructions }}
			<a onclick="return false" href>{{ getLocalizedName }}</a>
		</p>
	</div>
	<div v-else>
		<p @click="emitResult(item)">
			{{ getLocalizedInstructions }}
			<a href onclick="return false" @click="showResult = !showResult">{{ getLocalizedName }}</a>
		</p>
		<p v-if="showResult">{{ getLocalizedResult }}</p>
	</div>
</template>
<script>
const items = require('@theme/utils/items.json');
import { addItem, hasItem, getUID, getSessionTicket, getLocale } from '@theme/utils/helpers';
import axios from 'axios';

export default {
	computed: {
		item() {
			let item = items.find((row) => row.id == this.id);
			item = item || { name: 'not set' };
			return item;
		},
		getLocalizedInstructions() {
			let currItem = items.find((row) => row.id == this.id);
			if (this.$i18n.locale == 'es') {
				currItem = currItem.instructions.es.instruction;
			} else if (this.$i18n.locale == 'pt') {
				currItem = currItem.instructions.pt.instruction;
			} else {
				currItem = currItem.instructions.en.instruction;
			}
			return currItem;
		},
		getLocalizedResult() {
			let currItem = items.find((row) => row.id == this.id);
			if (this.$i18n.locale == 'es') {
				currItem = currItem.result.es.result;
			} else if (this.$i18n.locale == 'pt') {
				currItem = currItem.result.pt.result;
			} else {
				currItem = currItem.result.en.result;
			}
			return currItem;
		},
		getLocalizedName() {
			let currItem = items.find((row) => row.id == this.id);
			if (this.$i18n.locale == 'es') {
				currItem = currItem.name.es.name;
			} else if (this.$i18n.locale == 'pt') {
				currItem = currItem.name.pt.name;
			} else {
				currItem = currItem.name.en.name;
			}
			return currItem;
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
			var locale = this.$i18n.locale;
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
	created() {
		this.$i18n.locale = getLocale();
	},
	props: ['id'],
};
</script>
