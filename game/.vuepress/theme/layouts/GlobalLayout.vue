<template>
	<div class="wrapper">
		<div class="backdrop" v-if="dialogOpen">
			
		</div>
	  <div class="dialog" v-if="dialogOpen">
			<Dialog></Dialog>
		</div>
		<div class="markdown-body font-serif bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg shadow-lg">
			<Nav />

			<div class="flex mb-4">
				<div class="w-1/3"><component :is="inventory"></component></div>
				<div class="w-3/4"><component :is="layout"></component></div>
			</div>

			<Footer />
		</div>
	</div>
</template>
<script>
import Nav from '@theme/components/Nav.vue';
import Footer from '@theme/components/Footer.vue';
import BasicLayout from '@theme/layouts/BasicLayout.vue';
import Inventory from '@theme/components/Inventory.vue';
import Dialog from '@theme/components/Dialog.vue';
export default {
	components: {
		Nav,
		Footer,
		BasicLayout,
		Inventory,
		Dialog
	},
	data() {
		var me = this;
		this.$root.$on('dialog_open', () => {
			me.dialogOpen = true;
		});

		this.$root.$on('dialog_close', () => {
			me.dialogOpen = false;
		});

		return {
			dialogOpen: false
		}
	},
	computed: {
		layout() {
			return this.$page.frontmatter.layout || 'BasicLayout';
		},
		inventory() {
			return this.$page.frontmatter.inventory || 'Inventory';
		},
	},
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
