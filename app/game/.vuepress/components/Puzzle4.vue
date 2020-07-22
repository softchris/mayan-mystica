<template>
  <div>
    <div class="m-10 text-center">
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('o')"
      >O</button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('e')"
      >E</button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('e')"
      >E</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('c')"
      >C</button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('n')"
      >N</button>
      <button
        type="button"
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="spell('t')"
      >T</button>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="bg-transparent font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="test()"
      >{{ $t('assemblethepieces') }}</button>
    </div>
    <p>{{message}}</p>
    <p v-if="showNext">
      <router-link to="633">{{ $t('continue') }}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/puzzle4.js";
import { getLocale } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";

export default {
  name: "Puzzle4",
  i18n: {
    messages
  },
  data() {
    return {
      spellingString: "",
      message: "",
      showNext: false
    };
  },
  methods: {
    spell(letter) {
      //c-e-n-o-t-e
      this.spellingString = this.spellingString.concat(letter);
      console.log(this.spellingString);
    },
    test() {
      if (this.spellingString == "cenote") {
        this.message = this.$t("pass");
        this.showNext = true;
      } else {
        this.message = this.$t("fail");
      }
      this.spellingString = "";
    }
  },
  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", lang => (this.$i18n.locale = lang));
  },
  beforeDestroy() {
    //EventBus.$off("lang_changed");
  }
};
</script>
