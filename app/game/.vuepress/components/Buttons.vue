<template>
  <div>
    <div class="m-10 text-center">
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(1)"
      >🌎</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(2)"
      >🌳</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(3)"
      >🐍</button>
      <button
        class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        @click="count(4)"
      >💨</button>
    </div>
    <div class="text-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="test()"
      >{{ $t('trythedoor') }}</button>
    </div>
    <p>{{message}}</p>
    <p v-if="showNext">
      <router-link to="7">{{ $t('goinside') }}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/buttons.js";
import { getLocale } from "@theme/utils/helpers";

export default {
  name: "Buttons",
  i18n: {
    messages
  },
  data() {
    return {
      numbersArray: [],
      message: "",
      showNext: false
    };
  },
  methods: {
    count(item) {
      //earth,wind,tree,snake
      this.numbersArray.push(item);
      console.log(this.numbersArray);
    },
    test() {
      if (JSON.stringify([1, 4, 2, 3]) === JSON.stringify(this.numbersArray)) {
        this.message = this.$t("pass");
        this.showNext = true;
      } else {
        this.message = this.$t("fail");
      }
      this.numbersArray = [];
    }
  },
  created() {
    this.$i18n.locale = getLocale();
  }
};
</script>
<style scoped>
</style>
