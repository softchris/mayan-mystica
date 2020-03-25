<template>
	<div @click="pickUp(item.id)">
		<span v-if="show">
			You see a <span class="item">{{ item.name }}</span>
		</span>
	</div>
</template>
<script>
const items = require('../utils/items.json');
import { addItem, hasItem } from '../utils/helpers';

export default {
	computed: {
		item() {
			const item = items.find(row => row.id == this.id);
			return item;
		},
	},
	data() {
		const item = items.find(row => row.id == this.id);
		return {
			show: !hasItem(item.id),
		};
	},
	methods: {
		pickUp(id) {
			addItem(id);
			// item added event
			this.$root.$emit('item_added', id);
			this.show = false;
			// hide or garbage collect item
		},
	},
	props: ['id'],
};
</script>
<style scoped>
.item {
	color: orange;
	font-weight: bold;
}</style
>>
