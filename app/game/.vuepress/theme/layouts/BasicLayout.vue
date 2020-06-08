<template>
  <div class="markdown-body">
    <span
      class="float-right p-5 text-white underline cursor-pointer"
      @click="setLanguage('es')"
    >Español</span>
    <span
      class="float-right p-5 text-white underline cursor-pointer"
      @click="setLanguage('pt')"
    >Português</span>

    <span
      class="float-right p-5 text-white underline cursor-pointer"
      @click="goToLogin()"
    >{{ $t('myadventure') }}</span>
    <p class="text-3xl pb-5 pt-5 ml-5 text-sans">{{ $page.frontmatter.title }}</p>
    <div class="p-5 bg-white m-5 rounded">
      <Content />
    </div>
  </div>
</template>

<script>
import { getLocale, setLocale } from "@theme/utils/helpers";
import messages from "@theme/translations/misc.js";
import { EventBus } from "@theme/utils/event-bus";
import { i18n } from "@theme/utils/i18n";

export default {
  name: "BasicLayout",
  i18n: {
    messages
  },

  methods: {
    setLanguage(lang) {
      setLocale(lang);
      EventBus.$emit("lang_changed", lang);
      var currPath = this.$route.matched[0].path;
      var newPath = currPath.replace(/es|pt|en/gi, lang);
      console.log(newPath, currPath);
      //check to make sure you're not already on this page
      if (newPath == "") {
        this.$router.push({ path: "/pyramid/" + getLocale() + "/1" });
      } else {
        if (currPath !== newPath) {
          this.$router.push({ path: newPath });
        }
      }
    },
    goToLogin() {
      var currPath = this.$route.matched[0].path;
      var newPath = "/pyramid/" + getLocale() + "/login";
      if (currPath !== newPath) {
        this.$router.replace({ path: newPath });
      }
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
