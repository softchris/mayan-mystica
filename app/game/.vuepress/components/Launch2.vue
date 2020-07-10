<template>
  <div>
    <div v-if="showNext">
      <p>
        <router-link to="300">{{$t('continue')}}</router-link>
      </p>
    </div>
    <div v-else>
      <p>{{$t('message')}}</p>
      <p>
        <router-link to="/">{{$t('goback')}}</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import messages from "@theme/translations/launch2.js";
import { getLocale, getItems } from "@theme/utils/helpers";
import { EventBus } from "@theme/utils/event-bus";

export default {
  name: "Lauch2",
  i18n: {
    messages
  },
  data() {
    return {
      showNext: false
    };
  },
  methods: {},
  created() {
    this.$i18n.locale = getLocale();
    EventBus.$on("lang_changed", lang => (this.$i18n.locale = lang));

    var ids = getItems();
    //there should be 7 items in localstorage
    if (ids.length >= 7) {
      this.showNext = true;
    }
  }
};
</script>