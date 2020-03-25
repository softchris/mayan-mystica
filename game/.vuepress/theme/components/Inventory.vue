<template>
	<div class="markdown-body">
		<p class="text-2xl pb-5 pt-5 ml-5 text-sans">{{ title }}</p>

		<div>
			<div v-if="items.length == 0">
				Nothing yet!
			</div>
			<div v-else>
				<div class="p-5" v-for="item in items">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { getItems } from '../../../utils/helpers';
const items = require('../../../utils/items.json');

export default {
	created() {},
	data() {
		var me = this;
		this.$root.$on('item_added', id => {
			console.log('item added, lets add to inv');

			var ids = getItems();
			me.items = ids.map(id => items.find(item => item.id == id).name);
		});

		var ids = getItems();

		return {
			title: 'Inventory',
			items: ids.map(id => items.find(item => item.id == id).name),
		};
	},
};
</script>
