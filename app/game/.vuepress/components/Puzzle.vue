<template>
  <div>
    <p>{{ $t('match') }}</p>
    <div class="mt-4">
      <p>{{ $t('endangered') }}</p>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar1"
            v-model="radioButtonValue1"
          />
          <span class="text-xl ml-2">{{ $t('jaguar') }}</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw1"
            v-model="radioButtonValue1"
          />
          <span class="text-xl ml-2">{{ $t('macaw') }}</span>
        </label>
      </div>
    </div>
    <div class="mt-4">
      <p>Bash</p>
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="jaguar2"
            v-model="radioButtonValue2"
          />
          <span class="text-xl ml-2">{{ $t('jaguar') }}</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            v-on:change="pick()"
            class="form-radio"
            value="macaw2"
            v-model="radioButtonValue2"
          />
          <span class="text-xl ml-2">{{ $t('macaw') }}</span>
        </label>
      </div>
    </div>
    <div v-if="show">
      <p class="font-bold">{{ $t('pass') }}</p>
      <p>{{ $t('congratulations') }}</p>
      <p>
        <a
          href="https://azure.microsoft.com/resources/join-the-azure-developer-community?WT.mc_id=mayamystery-newsletter-jelooper"
          target="blank"
        >{{ $t('staytuned') }}</a>
      </p>
      <img :src="$withBase('/images/badge1.png')" alt="badge" />

      <a
        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmicrosoft.com/AzureMayaMystery%2F&text=I%20just%20entered%20the%20Azure%20Maya%20Mystery%20pyramid.%20Look%20forward%20to%20next%20month%20when%20I%20will%20get%20to%20explore%20more!&hashtags=AzureMayaMystery"
        class="twitter-hashtag-button"
        data-show-count="false"
      >{{ $t('tell') }}</a>

      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</template>
<script>
import messages from "@theme/translations/puzzle.js";
import { getLocale } from "@theme/utils/helpers";

export default {
  name: "Puzzle",
  i18n: {
    messages
  },
  data() {
    return {
      radioButtonValue1: "",
      radioButtonValue2: "",
      show: false
    };
  },
  methods: {
    pick() {
      if (
        this.radioButtonValue1 == "macaw1" &&
        this.radioButtonValue2 == "jaguar2"
      ) {
        this.show = true;
      }
    }
  },
  created() {
    this.$i18n.locale = getLocale();
  }
};
</script>
<style scoped></style>
