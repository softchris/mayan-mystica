<template>
	<div>
		<div class="m-10 p-10 rounded overflow-hidden shadow-lg">
			<p>{{ message }}</p>
			<form class="w-full max-w-sm">
				<div class="flex items-center">
					<input
						class="appearance-none focus:shadow-outline block w-full bg-white border border-gray-500 placeholder-gray-800 rounded py-3 px-4 m-2 leading-tight focus:outline-none focus:bg-white"
						type="text"
						:placeholder="$t('meaning')"
						:aria-label="$t('meaning')"
						v-model="guess"
					/>
					<button
						@click="submit"
						class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
						type="button"
					>
						{{ $t('submit') }}
					</button>
				</div>
			</form>
		</div>
		<p v-if="showNext">
			<router-link to="500">{{ $t('continue') }}</router-link>
		</p>
	</div>
</template>
<script>
import messages from '@theme/translations/bugs.js';
import { getLocale } from '@theme/utils/helpers';
import { EventBus } from '@theme/utils/event-bus';
//import SpiderController from '/AzureMayaMystery/scripts/bugs';

export default {
	name: 'Challenge',
	i18n: {
		messages,
	},
	data() {
		return {
			guess: '',
			message: '',
			showNext: false,
			bugs: {},
		};
	},
	methods: {
		submit() {
			if (this.guess == this.$t('guess')) {
				this.bugs.killAll();
				this.message = this.$t('welldone');
				this.showNext = true;
			} else {
				this.message = this.$t('sorry');
			}
			this.guess = '';
		},
	},
	created() {
		this.$i18n.locale = getLocale();
		EventBus.$on('lang_changed', (lang) => (this.$i18n.locale = lang));
	},
	mounted() {
		this.bugs = new SpiderController({
			minBugs: 10,
			maxBugs: 50,
			mouseOver: 'die',
		});
	},
	beforeDestroy() {
		//clear the object
		this.bugs == {};
	},
};
</script>
