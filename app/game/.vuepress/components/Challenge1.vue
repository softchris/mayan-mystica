<template>
  <div>
    <div class="m-10 p-10 rounded overflow-hidden shadow-lg">
      <p>{{message}}</p>
      <form class="w-full max-w-sm">
        <div class="flex items-center">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 m-2 leading-tight focus:outline-none focus:bg-white"
            type="text"
            :placeholder="$t('meaning')"
            :aria-label="$t('meaning')"
            v-model="guess"
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
      <router-link to="8">{{$t('enter')}}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/challenge1.js";
import { getLocale } from "@theme/utils/helpers";

export default {
  name: "Buttons",
  i18n: {
    messages
  },
  data() {
    return {
      guess: "",
      message: "",
      showNext: false
    };
  },
  methods: {
    submit() {
      if (this.guess == this.$t("guess")) {
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
    console.log(this.$i18n.locale);
  }
};
</script>