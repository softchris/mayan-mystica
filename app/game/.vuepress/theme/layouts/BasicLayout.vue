<template>
	<div class="markdown-body">
		<router-link to="/AzureMayaMystery/es" class="float-right p-5 white-link">
			<span @click="setLanguage('es')">Español</span>
		</router-link>
		<router-link to="/AzureMayaMystery/pt" class="float-right p-5 white-link">
			<span @click="setLanguage('pt')">Português</span>
		</router-link>
		<router-link to="/AzureMayaMystery/" class="float-right p-5 white-link">
			<span @click="setLanguage('en')">English</span>
		</router-link>

		<router-link to="/AzureMayaMystery/login" class="float-right p-5 white-link">My Adventure</router-link>
		<h1 class="text-3xl pb-5 pt-5 ml-5 text-sans">{{ $page.frontmatter.title }}</h1>
		<div class="p-5 bg-white m-5 rounded">
			<Content />
		</div>
	</div>
</template>

<script>
import { setLocale, getLocale } from '@theme/utils/helpers';

export default {
	name: 'BasicLayout',
	i18n: {},
	methods: {
		setLanguage(lang) {
			setLocale(lang);
			this.$root.$emit('lang_changed', lang);
		},
	},
};
</script>

<style scoped>
.white-link {
	color: white;
}
</style>
