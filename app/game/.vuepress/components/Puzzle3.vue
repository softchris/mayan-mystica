<template>
  <div>
    <p>{{ $t('code') }}</p>
    <div class="m-10 p-10 rounded overflow-hidden shadow-lg">
      <p>{{message}}</p>
      <form class="w-full max-w-sm">
        <div class="flex items-center">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 m-2 leading-tight focus:outline-none focus:bg-white"
            :placeholder="$t('meaning')"
            :aria-label="$t('meaning')"
            v-model="guess"
            maxlength="2"
          />
          <button
            @click="submit"
            class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-md border-4 text-white py-1 px-2 rounded"
            type="button"
          >{{$t('submit')}}</button>
        </div>
      </form>
    </div>
    <p v-if="showNext">
      <router-link to="119">{{$t('continue')}}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/puzzle3.js";
import { getLocale } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";

export default {
  name: "Puzzle3",
  i18n: {
    messages
  },
  data() {
    return {
      showNext: false,
      message: "",
      guess: ""
    };
  },
  methods: {
    submit() {
      if (this.guess == "🦜") {
        this.message = this.$t("welldone");
        this.showNext = true;
      } else {
        this.message = this.$t("sorry");
      }
      this.guess = "";
    }
  },
  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", lang => (this.$i18n.locale = lang));
  },
  beforeDestroy() {
    EventBus.$off("lang_changed");
  }
};
</script>
<style scoped></style>
