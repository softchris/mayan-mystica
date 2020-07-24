<template>
  <div>
    <iframe
      class="pt-5"
      width="560"
      height="400"
      src="https://www.youtube.com/embed/jgMHdpcyvvE"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <p>
      <router-link to="300">{{$t('continue')}}</router-link>
    </p>
  </div>
</template>
<script>
import messages from "@theme/translations/launch2.js";
import { getLocale, getItems } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";

export default {
  name: "Lauch2",
  i18n: {
    messages,
  },

  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", (lang) => (this.$i18n.locale = lang));
  },
};
</script>