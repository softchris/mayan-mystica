<template>
	<footer class="footer rounded-b sticky pin-bottom p-6">
		<div
			class="text-sans text-white w-full text-base lg:text-xl md:text-sm sm:text-sm block flex-grow flex justify-center items-center w-auto"
		>
			<a href="http://go.microsoft.com/fwlink/?LinkId=521839" target="_blank">{{ $t('privacy') }}</a
			>&nbsp;|&nbsp;
			<a href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx">{{
				$t('terms')
			}}</a
			>&nbsp;|&nbsp;
			<a href="mailto:ammteam@microsoft.com">{{ $t('support') }}</a>
			&nbsp;|&nbsp;
			{{ $t('copyright') }}
		</div>
	</footer>
</template>
<script>
import { getLocale } from '@theme/utils/helpers';
import messages from '../translations/footer.js';
export default {
	name: 'Footer',
	i18n: {
		messages,
	},
	data() {
		this.$root.$on('lang_changed', (lang) => {
			this.$i18n.locale = lang;
		});
		return {};
	},
	created() {
		this.$i18n.locale = getLocale();
	},
};
</script>
<style scoped>
.markdown-body a {
	color: white;
}
</style>
